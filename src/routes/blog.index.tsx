import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-posts";
import { ArrowLeft, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Renda Extra e Profissões Digitais | Guia Profissões Digitais" },
      {
        name: "description",
        content:
          "Artigos práticos sobre profissões digitais, programas de afiliados (Shopee, Mercado Livre, TikTok Shop) e como gerar renda extra pela internet.",
      },
      { property: "og:title", content: "Blog — Renda Extra e Profissões Digitais" },
      {
        property: "og:description",
        content: "Guias passo a passo para começar a ganhar renda extra pela internet.",
      },
    ],
    links: [{ rel: "canonical", href: "https://digital-pathways-unlocked.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-brand-deep py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para o início
          </Link>
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-brand-primary/10 text-brand-accent border border-brand-accent/20 rounded-full">
            Blog
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Guias práticos de renda extra digital
          </h1>
          <p className="text-slate-300 text-lg">
            Conteúdos curtos e diretos sobre afiliados, profissões digitais e como começar a ganhar
            pela internet.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block bg-card border border-border rounded-2xl p-8 hover:border-brand-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-md font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readingTime}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-muted-foreground">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
