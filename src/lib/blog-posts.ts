export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-comecar-como-afiliado-shopee",
    title: "Como começar como afiliado da Shopee em 2025 (passo a passo)",
    description:
      "Aprenda como se cadastrar no programa de afiliados da Shopee, escolher produtos e ganhar suas primeiras comissões mesmo sem aparecer.",
    date: "2025-03-12",
    readingTime: "6 min",
    category: "Afiliados",
    content: [
      "O programa de afiliados da Shopee é uma das formas mais simples de começar a ganhar dinheiro pela internet no Brasil. Você divulga produtos com um link único e recebe comissão sobre cada venda — sem precisar ter estoque, sem investimento inicial e sem aparecer em vídeo.",
      "## 1. Cadastro no programa",
      "Acesse o site oficial 'Afiliados Shopee', faça login com sua conta da Shopee e preencha o cadastro com seus dados e canais de divulgação (Instagram, TikTok, WhatsApp, blog). A aprovação geralmente sai em até 7 dias.",
      "## 2. Escolha de produtos",
      "Foque em produtos com avaliação acima de 4,7 estrelas, com mais de 1.000 vendas e que resolvam um problema específico. Categorias campeãs: utilidades domésticas, beleza, eletrônicos baratos e moda feminina.",
      "## 3. Onde divulgar",
      "Os canais que mais convertem para iniciantes são grupos de WhatsApp de ofertas, perfis no Instagram com Reels curtos mostrando o produto em uso, e TikTok com vídeos diretos do tipo 'achei isso na Shopee por R$X'.",
      "## 4. Erros que matam o resultado",
      "Não divulgue produtos aleatórios; foque em 1 nicho. Não esconda o preço. Não use só links — sempre mostre o produto funcionando. E acompanhe o painel diariamente para entender o que vende.",
      "Com consistência, é totalmente realista alcançar de R$ 500 a R$ 3.000 por mês nos primeiros 3 a 6 meses.",
    ],
  },
  {
    slug: "profissoes-digitais-renda-extra",
    title: "10 profissões digitais para ganhar renda extra em casa",
    description:
      "Conheça 10 profissões reais do marketing digital que você pode exercer de casa, com celular ou computador, mesmo sem experiência.",
    date: "2025-03-05",
    readingTime: "8 min",
    category: "Profissões Digitais",
    content: [
      "O mercado digital cresce mais de 20% ao ano no Brasil, e existem dezenas de profissões que podem ser feitas 100% de casa. Abaixo, 10 que mais contratam iniciantes em 2025.",
      "## 1. Social Media",
      "Cuida das redes sociais de pequenos negócios. Cobrança média: R$ 500 a R$ 2.000 por cliente/mês.",
      "## 2. Gestor de Tráfego",
      "Cria e otimiza anúncios no Meta, Google e TikTok Ads. Uma das profissões mais bem pagas do digital.",
      "## 3. Copywriter",
      "Escreve textos persuasivos para vendas, e-mails e landing pages. Excelente para quem gosta de escrever.",
      "## 4. Editor de Vídeo",
      "Edita Reels, Shorts e VSLs. Demanda altíssima com o crescimento do vídeo curto.",
      "## 5. Designer Digital",
      "Cria artes para feed, stories, e-books e identidade visual usando ferramentas como Canva e Figma.",
      "## 6. Assistente Virtual",
      "Apoia infoprodutores e empresas em tarefas administrativas remotas.",
      "## 7. Coprodutor Digital",
      "Estrutura lançamentos de infoprodutos em troca de % das vendas.",
      "## 8. Programador Web",
      "Cria sites, landing pages e automações. Ferramentas como Lovable permitem começar sem saber código.",
      "## 9. Suporte Digital",
      "Atendimento ao cliente para infoprodutos e e-commerces.",
      "## 10. Afiliado",
      "Divulga produtos físicos (Shopee, Mercado Livre) ou digitais (Hotmart) e ganha comissão.",
      "A melhor escolha depende do seu perfil. Se você é organizado, comece como Assistente Virtual. Se gosta de escrever, Copywriter. Se gosta de vídeos, Edição.",
    ],
  },
  {
    slug: "tiktok-shop-como-vender",
    title: "TikTok Shop: como vender e ganhar comissão como afiliado",
    description:
      "Tudo sobre o TikTok Shop no Brasil: como entrar no programa de afiliados, gravar vídeos que vendem e receber comissões pelo app.",
    date: "2025-02-22",
    readingTime: "5 min",
    category: "Afiliados",
    content: [
      "O TikTok Shop chegou ao Brasil e já é a maior oportunidade de social commerce do ano. Como afiliado, você pode ganhar de 5% a 30% de comissão por venda — sem precisar criar produto, sem estoque e sem aparecer no vídeo se não quiser.",
      "## Como entrar",
      "Você precisa ter no mínimo 1.000 seguidores e estar com a conta verificada como Criador. Dentro do app, vá em 'Estúdio do Criador' > 'Marketplace de Afiliados' e escolha os produtos.",
      "## Que tipo de vídeo vende",
      "Vídeos curtos (15–30s) mostrando o produto em uso, com legenda direta no estilo: 'Comprei isso e não consigo mais viver sem'. Evite parecer comercial — o algoritmo penaliza vídeos muito vendedores.",
      "## Produtos que mais convertem",
      "Utilidades domésticas, beleza, organização e gadgets baratos (até R$ 60). O ticket médio do TikTok Shop é mais baixo, mas o volume é alto.",
      "## Quanto dá pra ganhar",
      "Criadores iniciantes que postam 1 vídeo por dia chegam a R$ 1.000–R$ 3.000 no primeiro mês. Top criadores faturam R$ 50.000+ por mês.",
    ],
  },
];

export const getPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
