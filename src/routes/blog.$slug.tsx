import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, blogPosts } from "@/lib/blog-posts";
import { ArrowLeft, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} | Guia Profissões Digitais` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "article:published_time", content: post.date },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://digital-pathways-unlocked.lovable.app/blog/${post.slug}`,
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Post não encontrado</h1>
        <Link to="/blog" className="text-brand-primary hover:underline">
          Ver todos os posts
        </Link>
      </div>
    </div>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-brand-deep py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Todos os posts
          </Link>
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="px-2 py-1 bg-brand-primary/15 text-brand-accent rounded-md font-semibold uppercase tracking-wide">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingTime}
            </span>
          </div>
          <h1 className="font-display text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-slate-300 text-lg">{post.description}</p>
        </div>
      </header>

      <article className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block: string, i: number) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display text-2xl font-bold mt-10 mb-3">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-foreground/90 leading-relaxed mb-5">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-brand-deep text-white rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold mb-3">
              Quer o guia completo das 10 profissões?
            </h3>
            <p className="text-slate-300 mb-6">
              Ebook prático + bônus de afiliados (Shopee, Mercado Livre e TikTok Shop) por R$ 19,90.
            </p>
            <Link
              to="/"
              hash="pricing"
              className="inline-block px-8 py-4 bg-brand-primary hover:bg-brand-accent text-white font-bold rounded-xl transition-all"
            >
              QUERO MEU ACESSO
            </Link>
          </div>

          {others.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-xl font-bold mb-6">Leia também</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="block bg-card border border-border rounded-2xl p-6 hover:border-brand-primary/50 transition-all"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary mb-2">
                      {p.category}
                    </p>
                    <h4 className="font-bold leading-tight">{p.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
