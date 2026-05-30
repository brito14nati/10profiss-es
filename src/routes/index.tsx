import { createFileRoute } from "@tanstack/react-router";
import ebookCover from "@/assets/ebook-cover.png";
import shopeeLogo from "@/assets/shopee-logo.png";
import mercadoLivreLogo from "@/assets/mercadolivre-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.png";
import resultDashboard from "@/assets/result-dashboard.png";
import resultPix from "@/assets/result-pix.png";
import resultMetrics from "@/assets/result-metrics.png";
import {
  DollarSign,
  TrendingUp,
  Instagram,
  Coins,
  ShoppingBag,
  LineChart,
  Home,
  Wallet,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganhe Renda Extra com 10 Profissões do Marketing Digital" },
      { name: "description", content: "Descubra 10 profissões reais do marketing digital para começar a ganhar renda extra pela internet, mesmo sem experiência. Acesso imediato." },
      { property: "og:title", content: "Ganhe Renda Extra com 10 Profissões do Marketing Digital" },
      { property: "og:description", content: "10 profissões digitais reais + bônus de afiliados (Shopee, Mercado Livre, TikTok Shop)." },
      { property: "og:image", content: ebookCover },
      { name: "twitter:image", content: ebookCover },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap" },
    ],
  }),
  component: Index,
});

const professions = [
  { n: "01", name: "Social Media", desc: "Gestão estratégica de redes sociais para marcas." },
  { n: "02", name: "Copywriter", desc: "Escrita persuasiva que vende e converte." },
  { n: "03", name: "Gestor de Tráfego", desc: "Anúncios pagos no Meta, Google e TikTok." },
  { n: "04", name: "Assistente Virtual", desc: "Suporte remoto para empreendedores digitais." },
  { n: "05", name: "Editor de Vídeo", desc: "Cortes e edições para redes sociais." },
  { n: "06", name: "Designer Digital", desc: "Identidade visual e artes para o digital." },
  { n: "07", name: "Gestor de Marketing", desc: "Coordenação estratégica de campanhas." },
  { n: "08", name: "Suporte Digital", desc: "Atendimento e relacionamento online." },
  { n: "09", name: "Programador Web", desc: "Sites, landing pages e automações." },
  { n: "10", name: "Coprodutor Digital", desc: "Estruturação e lançamento de infoprodutos." },
];

const forYou = [
  "Quer criar uma renda extra",
  "Quer trabalhar pela internet",
  "Busca mais independência financeira",
  "Não sabe por onde começar",
  "Deseja conhecer profissões antes de investir em cursos",
  "Quer descobrir novas oportunidades de renda",
];

const notForYou = [
  "Procura dinheiro fácil",
  "Acredita em promessas milagrosas",
  "Não está disposto(a) a aprender uma nova habilidade",
];

const bonuses = [
  { name: "Afiliado Shopee", desc: "Comissões divulgando produtos da maior marketplace asiática.", logo: shopeeLogo },
  { name: "Afiliado Mercado Livre", desc: "Programa de afiliados do maior e-commerce da América Latina.", logo: mercadoLivreLogo },
  { name: "Afiliado TikTok Shop", desc: "A nova fronteira do social commerce no Brasil.", logo: tiktokLogo },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden bg-brand-deep py-16 lg:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.12),transparent_55%)] pointer-events-none" />

        {/* Floating decorative icons */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
          <div className="absolute top-[12%] left-[6%] w-14 h-14 rounded-2xl bg-brand-primary/15 border border-brand-primary/30 backdrop-blur-sm flex items-center justify-center rotate-[-8deg] animate-[float_6s_ease-in-out_infinite]">
            <DollarSign className="w-7 h-7 text-brand-primary" />
          </div>
          <div className="absolute top-[20%] right-[8%] w-16 h-16 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 backdrop-blur-sm flex items-center justify-center rotate-[10deg] animate-[float_7s_ease-in-out_infinite_0.6s]">
            <TrendingUp className="w-8 h-8 text-brand-accent" />
          </div>
          <div className="absolute top-[55%] left-[4%] w-12 h-12 rounded-xl bg-warning/15 border border-warning/30 backdrop-blur-sm flex items-center justify-center rotate-[6deg] animate-[float_8s_ease-in-out_infinite_1.2s]">
            <Coins className="w-6 h-6 text-warning" />
          </div>
          <div className="absolute top-[60%] right-[6%] w-14 h-14 rounded-2xl bg-brand-primary/15 border border-brand-primary/30 backdrop-blur-sm flex items-center justify-center rotate-[-12deg] animate-[float_6.5s_ease-in-out_infinite_0.3s]">
            <Instagram className="w-7 h-7 text-brand-primary" />
          </div>
          <div className="absolute top-[35%] left-[12%] w-10 h-10 rounded-xl bg-success/15 border border-success/30 backdrop-blur-sm flex items-center justify-center rotate-[15deg] animate-[float_7.5s_ease-in-out_infinite_0.9s]">
            <LineChart className="w-5 h-5 text-success" />
          </div>
          <div className="absolute top-[42%] right-[14%] w-11 h-11 rounded-xl bg-brand-accent/15 border border-brand-accent/30 backdrop-blur-sm flex items-center justify-center rotate-[-6deg] animate-[float_8.5s_ease-in-out_infinite_1.5s]">
            <ShoppingBag className="w-5 h-5 text-brand-accent" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-brand-primary/10 text-brand-accent border border-brand-accent/20 rounded-full">
              Ebook Prático + bônus
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Ganhe Renda Extra com uma dessas{" "}
              <span className="text-brand-primary">10 Profissões</span> do Marketing Digital
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Descubra formas reais de começar a ganhar dinheiro pela internet, mesmo sem experiência e sem precisar investir alto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#pricing"
                className="px-8 py-4 bg-brand-primary hover:bg-brand-accent text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-primary/30 text-center"
              >
                QUERO MEU ACESSO AGORA
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto">
              {[
                { icon: Home, label: "Trabalho 100% home office", iconWrap: "bg-brand-primary/15 border-brand-primary/30", iconColor: "text-brand-primary" },
                { icon: Wallet, label: "Ganhe + de R$500 por mês", iconWrap: "bg-brand-accent/15 border-brand-accent/30", iconColor: "text-brand-accent" },
                { icon: Sparkles, label: "Mude a sua realidade", iconWrap: "bg-warning/15 border-warning/30", iconColor: "text-warning" },
              ].map(({ icon: Icon, label, iconWrap, iconColor }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-3 py-4"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${iconWrap}`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </header>

      {/* Hook */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl lg:text-4xl font-bold">Você sente que o dinheiro nunca sobra?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ou que gostaria de ter uma renda extra para conquistar mais liberdade, sair do aperto financeiro ou realizar seus objetivos?
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A verdade é que milhares de pessoas estão usando a internet para criar novas fontes de renda todos os dias. E não estamos falando de promessas milagrosas ou fórmulas mágicas — estamos falando de{" "}
              <span className="font-bold text-foreground">profissões reais</span> que empresas contratam diariamente.
            </p>
          </div>
        </div>
      </section>

      {/* Professions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">O que você vai encontrar</span>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold mt-3 mb-4">10 Profissões Digitais</h2>
            <p className="text-muted-foreground">Exercidas de forma remota, usando apenas um celular ou computador.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {professions.map((p) => (
              <div
                key={p.n}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:border-brand-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 text-brand-primary font-bold text-sm">
                  {p.n}
                </div>
                <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8">
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">Em cada profissão você descobre:</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "O que o profissional faz",
                "Qual é o perfil ideal",
                "Demanda real no mercado",
                "Como dar os primeiros passos",
                "Como conseguir seus primeiros clientes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-success/15 text-success flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-warning/10 text-warning rounded-full">
              Bônus Especial
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-3">Outras formas de gerar renda</h2>
            <p className="text-muted-foreground">Você vai conhecer os programas de afiliados para começar a divulgar produtos e ganhar comissões.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bonuses.map((b) => (
              <div key={b.name} className="relative bg-background rounded-2xl p-8 border border-border hover:border-brand-primary/40 transition-colors">
                {b.logo ? (
                  <img src={b.logo} alt={`Logo ${b.name}`} loading="lazy" width={1024} height={1024} className="w-12 h-12 object-contain mb-4" />
                ) : (
                  <div className="text-3xl mb-4">🎁</div>
                )}
                <h3 className="font-bold text-lg mb-2">{b.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results / Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-success/10 text-success rounded-full">
              Resultados Reais
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-3">
              Quem aplicou já está colhendo
            </h2>
            <p className="text-muted-foreground">
              Prints reais de quem começou usando os métodos do guia. Sem promessas mirabolantes - apenas trabalho consistente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5">
                <img
                  src={resultDashboard}
                  alt="Painel de afiliado mostrando R$ 1,5K de GMV atribuído, 28 itens vendidos e R$ 143,55 de comissão estimada"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl border border-border"
                />
              </div>
              <div className="p-6 border-t border-border">
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-primary mb-2">Painel de Afiliado do tiktok shop</p>
                <h3 className="font-bold text-lg mb-1">R$143 de comissão em 1 dia</h3>
                <p className="text-sm text-muted-foreground">Vendendo todos os dias esse valor, no final do mês você lucra R$4.290</p>
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gradient-to-br from-warning/5 to-brand-primary/5 flex items-center justify-center min-h-[240px]">
                <img
                  src={resultMetrics}
                  alt="Painel de métricas mostrando 6,1 mil em vendas, 190 pedidos, 202 itens vendidos e R$ 546,50 de comissão estimada no mês"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl border border-border"
                />
              </div>
              <div className="p-6 border-t border-border">
                <p className="text-xs font-semibold tracking-widest uppercase text-warning mb-2">painel de afiliado da shopee</p>
                <h3 className="font-bold text-lg mb-1">R$546,50 de comissão no mês</h3>
                <p className="text-sm text-muted-foreground">A depender do produto e da % de comissão esse lucro pode ser ainda maior</p>
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gradient-to-br from-success/5 to-brand-accent/5 flex items-center justify-center min-h-[240px]">
                <img
                  src={resultPix}
                  alt="Notificação de recebimento de R$ 1.000,00 via Pix"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl border border-border"
                />
              </div>
              <div className="p-6 border-t border-border">
                <p className="text-xs font-semibold tracking-widest uppercase text-success mb-2">Pix Recebido de trabalho como social media</p>
                <h3 className="font-bold text-lg mb-1">+ R$ 1.000,00 na conta</h3>
                <p className="text-sm text-muted-foreground">Resultado do trabalho com uma das profissões do marketing digital, aplicando o que está no guia</p>
              </div>
            </div>
          </div>



          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
            * Resultados variam de pessoa para pessoa e dependem de dedicação, consistência e aplicação do conteúdo.
          </p>
        </div>
      </section>

      {/* Qualifiers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-success/5 p-10 rounded-3xl border border-success/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Este ebook é para você que:</h3>
              <ul className="space-y-3">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-success rounded-full flex items-center justify-center text-[10px] text-success-foreground font-bold">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-destructive/5 p-10 rounded-3xl border border-destructive/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">NÃO é para você que:</h3>
              <ul className="space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 bg-destructive rounded-full flex items-center justify-center text-[10px] text-destructive-foreground font-bold">✕</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Imagine */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-6">
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Imagine se...</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Daqui a alguns meses você já souber exatamente qual profissão combina com você. Tiver clareza sobre qual caminho seguir, onde buscar conhecimento, e um plano para construir uma nova fonte de renda.
          </p>
          <p className="text-lg font-semibold text-foreground">Tudo começa com uma decisão.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-brand-deep text-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Quanto vale descobrir uma profissão que pode mudar sua realidade?
          </h2>
          <p className="text-slate-400 mb-10">Acesso imediato ao guia completo + bônus especial + suporte no WhatsApp</p>
          <div className="bg-white/5 border border-white/10 p-10 lg:p-12 rounded-3xl backdrop-blur-sm">
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">Hoje por apenas</p>
            <div className="text-6xl lg:text-7xl font-display font-extrabold text-brand-accent mb-3">
              R$ 17,90
            </div>
            <p className="text-sm text-slate-400 mb-8">Pagamento único · Acesso imediato</p>
            <a
              href="#"
              className="block w-full py-5 bg-brand-primary hover:bg-brand-accent text-white font-black text-lg lg:text-xl rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-brand-primary/30"
            >
              GARANTIR MEU ACESSO AGORA
            </a>
            <p className="mt-6 text-xs text-slate-500 uppercase tracking-widest">
              Compra segura · Download imediato
            </p>
          </div>
          <p className="mt-8 text-slate-400 text-sm max-w-md mx-auto">
            A oportunidade de começar pode estar a apenas uma habilidade de distância.
          </p>
        </div>
      </section>

      <footer className="py-10 border-t border-border text-center text-muted-foreground text-sm">
        <p>© 2024 Guia Profissões Digitais. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
