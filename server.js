const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const site = {
  name: 'Visite Belém',
  title: 'Visite Belém',
  url: 'http://localhost:3000',
  description:
    'Guia de turismo de Belém do Pará com atrações, gastronomia, eventos, cultura, transporte e dicas de viagem.'
};

app.use((req, res, next) => {
  res.locals.currentUrl = `${site.url}${req.path}`;
  next();
});

const navItems = [
  { label: 'Início', href: '/', key: 'home' },
  { label: 'Atrações', href: '/atracoes', key: 'attractions' },
  { label: 'Gastronomia', href: '/gastronomia', key: 'gastronomy' },
  { label: 'Eventos', href: '/eventos', key: 'events' },
  { label: 'Dicas', href: '/dicas-de-viagem', key: 'tips' },
  { label: 'Sobre Belém', href: '/sobre-belem', key: 'about' },
  { label: 'Contato', href: '/contato', key: 'contact' }
];

const attractions = [
  {
    name: 'Mercado Ver-o-Peso',
    image: 'ver-o-peso.jpg',
    description:
      'Um dos mercados mais emblemáticos do Brasil, com cheiros, cores, ervas, frutas amazônicas, peixes e a energia cotidiana de Belém.',
    tip: 'Vá pela manhã para ver o movimento do mercado e experimentar sabores regionais com calma.',
    hours: 'Horários: confirmar funcionamento atualizado antes da visita.',
    location: 'Localização: bairro da Cidade Velha, região portuária.'
  },
  {
    name: 'Estação das Docas',
    image: 'estacao-docas.jpg',
    description:
      'Complexo turístico às margens da Baía do Guajará, com restaurantes, passeios de barco, música e vista para o pôr do sol.',
    tip: 'Reserve um fim de tarde para caminhar, jantar e acompanhar a luz mudando sobre o rio.',
    hours: 'Horários: consultar programação oficial e funcionamento dos estabelecimentos.',
    location: 'Localização: Avenida Boulevard Castilhos França.'
  },
  {
    name: 'Mangal das Garças',
    image: 'mangal-garcas.jpg',
    description:
      'Parque naturalístico com viveiros, mirante, lagos e experiências que aproximam visitantes da biodiversidade amazônica.',
    tip: 'Leve água, use roupas leves e suba ao mirante em dias de céu aberto.',
    hours: 'Horários: confirmar dias de funcionamento e acesso aos espaços internos.',
    location: 'Localização: Passagem Carneiro da Rocha, Cidade Velha.'
  },
  {
    name: 'Theatro da Paz',
    image: 'theatro-paz.jpg',
    description:
      'Joia arquitetônica do ciclo da borracha, com salões históricos, programação cultural e visitas guiadas.',
    tip: 'Verifique a agenda de espetáculos e a disponibilidade de visita guiada.',
    hours: 'Horários: sujeitos à agenda cultural e visitas programadas.',
    location: 'Localização: Praça da República.'
  },
  {
    name: 'Basílica de Nazaré',
    image: 'basilica-nazare.jpg',
    description:
      'Santuário ligado ao Círio de Nazaré, expressão profunda da fé, da arte sacra e da identidade paraense.',
    tip: 'Visite com respeito ao ambiente religioso e observe os detalhes do interior.',
    hours: 'Horários: confirmar horários de missas e visitação.',
    location: 'Localização: Avenida Nazaré.'
  },
  {
    name: 'Forte do Presépio',
    image: 'forte-presepio.jpg',
    description:
      'Marco de fundação de Belém, com vista para a baía e conexão direta com a formação histórica da cidade.',
    tip: 'Combine com um roteiro pela Cidade Velha e pela Casa das Onze Janelas.',
    hours: 'Horários: confirmar funcionamento do espaço museal.',
    location: 'Localização: Feliz Lusitânia, Cidade Velha.'
  },
  {
    name: 'Parque Estadual do Utinga',
    image: 'utinga.jpg',
    description:
      'Área verde importante para lazer, trilhas, observação da natureza e contato com a floresta dentro da capital.',
    tip: 'Use protetor solar, repelente e calçado confortável para caminhar.',
    hours: 'Horários: consultar regras de acesso e atividades disponíveis.',
    location: 'Localização: região metropolitana de Belém.'
  },
  {
    name: 'Ilha do Combu',
    image: 'ilha-combu.jpg',
    description:
      'Ilha ribeirinha próxima ao centro, famosa por restaurantes, chocolate artesanal, igarapés e vida amazônica.',
    tip: 'Planeje o transporte fluvial com antecedência e confira as condições do tempo.',
    hours: 'Horários: variam conforme restaurantes, barcos e passeios.',
    location: 'Localização: acesso por travessia de barco a partir de Belém.'
  }
];

const foods = [
  {
    name: 'Tacacá',
    image: 'tacaca.jpg',
    description:
      'Caldo quente com tucupi, goma de mandioca, jambu e camarão, servido tradicionalmente em cuias.',
    reason: 'É uma das experiências mais marcantes para entender o sabor amazônico.'
  },
  {
    name: 'Maniçoba',
    image: 'manicoba.jpg',
    description:
      'Prato de preparo demorado feito com folha de mandioca brava cozida por vários dias e carnes.',
    reason: 'Mostra a força das tradições familiares e das festas paraenses.'
  },
  {
    name: 'Pato no Tucupi',
    image: 'pato-tucupi.jpg',
    description:
      'Receita festiva com pato, tucupi e jambu, muito associada ao almoço do Círio de Nazaré.',
    reason: 'Une ingredientes amazônicos, celebração e memória afetiva local.'
  },
  {
    name: 'Açaí Paraense',
    image: 'acai.jpg',
    description:
      'Consumido de forma tradicional, geralmente sem açúcar e acompanhado de farinha, peixe ou camarão.',
    reason: 'Revela como o açaí faz parte da rotina alimentar de Belém.'
  },
  {
    name: 'Vatapá Paraense',
    image: 'tacaca.jpg',
    description:
      'Creme encorpado com camarão, leite de coco, temperos e influência afro-amazônica.',
    reason: 'É presença frequente em bancas, festas e refeições regionais.'
  },
  {
    name: 'Cupuaçu',
    image: 'acai.jpg',
    description:
      'Fruta amazônica aromática usada em sucos, cremes, doces, sorvetes e sobremesas.',
    reason: 'Entrega acidez, perfume e frescor típicos da Amazônia.'
  },
  {
    name: 'Bacuri',
    image: 'pato-tucupi.jpg',
    description:
      'Fruta de sabor intenso e polpa cremosa, muito valorizada em doces e sorvetes paraenses.',
    reason: 'É uma descoberta deliciosa para quem procura sabores menos óbvios.'
  }
];

const events = [
  {
    name: 'Círio de Nazaré',
    description:
      'Uma das maiores manifestações religiosas do Brasil, reunindo procissões, promessas, cultura popular e encontros familiares.',
    tip: 'Hospedagem e deslocamentos devem ser planejados com antecedência, especialmente em outubro.'
  },
  {
    name: 'Festivais culturais',
    description:
      'A cidade recebe programações ligadas a teatro, dança, artes visuais, audiovisual e cultura amazônica ao longo do ano.',
    tip: 'Consulte a agenda de teatros, museus e centros culturais antes da viagem.'
  },
  {
    name: 'Festivais gastronômicos',
    description:
      'Eventos valorizam ingredientes como tucupi, jambu, açaí, cacau, peixes amazônicos e frutas regionais.',
    tip: 'Procure feiras e menus especiais para experimentar vários sabores em um só roteiro.'
  },
  {
    name: 'Mercados locais',
    description:
      'Feiras e mercados revelam a vida cotidiana, o artesanato, as ervas, os temperos e a relação da cidade com os rios.',
    tip: 'Vá cedo, leve dinheiro em espécie para pequenos vendedores e respeite o ritmo local.'
  },
  {
    name: 'Música e eventos regionais',
    description:
      'Carimbó, guitarrada, tecnobrega e outros ritmos fazem parte da trilha sonora vibrante de Belém.',
    tip: 'Busque casas de show e programações ao ar livre para viver a noite paraense.'
  }
];

const tips = [
  {
    title: 'Melhor época para visitar',
    text: 'Belém pode ser visitada durante todo o ano. A cidade tem clima quente e úmido; confira a previsão e planeje passeios externos com flexibilidade.'
  },
  {
    title: 'Clima',
    text: 'Chuvas podem aparecer mesmo em dias ensolarados. Roupas leves, capa compacta e calçados confortáveis ajudam bastante.'
  },
  {
    title: 'O que levar',
    text: 'Inclua repelente, protetor solar, garrafa de água, roupas respiráveis e uma bolsa pequena para passeios.'
  },
  {
    title: 'Transporte',
    text: 'Use aplicativos, táxis, ônibus e barcos conforme o roteiro. Para ilhas e travessias, confirme horários e pontos de saída.'
  },
  {
    title: 'Segurança',
    text: 'Como em grandes cidades, evite exibir objetos de valor, prefira áreas movimentadas e peça orientação local sobre deslocamentos.'
  },
  {
    title: 'Costumes locais',
    text: 'A culinária, a fé e os mercados são parte essencial da experiência. Converse com moradores e respeite espaços religiosos e comunitários.'
  },
  {
    title: 'Dinheiro e pagamentos',
    text: 'Cartões e pagamentos digitais são comuns, mas dinheiro em espécie pode facilitar compras em feiras, barcos e pequenos negócios.'
  },
  {
    title: 'Internet e celular',
    text: 'A cobertura costuma ser boa em áreas centrais. Em ilhas e passeios mais afastados, baixe mapas e informações antes de sair.'
  }
];

function renderPage(res, view, options) {
  res.render(`pages/${view}`, {
    site,
    navItems,
    ...options
  });
}

app.get('/', (req, res) => {
  renderPage(res, 'home', {
    active: 'home',
    pageTitle: 'Visite Belém | Turismo, cultura e sabores da Amazônia',
    pageDescription:
      'Descubra Belém do Pará: atrações históricas, gastronomia amazônica, cultura, eventos e dicas para planejar sua viagem.',
    attractions: attractions.slice(0, 4),
    foods: foods.slice(0, 4)
  });
});

app.get('/atracoes', (req, res) => {
  renderPage(res, 'attractions', {
    active: 'attractions',
    pageTitle: 'Atrações em Belém | Visite Belém',
    pageDescription:
      'Conheça os principais pontos turísticos de Belém: Ver-o-Peso, Estação das Docas, Mangal das Garças, Theatro da Paz e mais.',
    attractions
  });
});

app.get('/gastronomia', (req, res) => {
  renderPage(res, 'gastronomy', {
    active: 'gastronomy',
    pageTitle: 'Gastronomia Paraense | Visite Belém',
    pageDescription:
      'Explore sabores de Belém como tacacá, maniçoba, pato no tucupi, açaí paraense, cupuaçu e bacuri.',
    foods
  });
});

app.get('/eventos', (req, res) => {
  renderPage(res, 'events', {
    active: 'events',
    pageTitle: 'Eventos em Belém | Visite Belém',
    pageDescription:
      'Veja experiências culturais em Belém, incluindo Círio de Nazaré, festivais, mercados, música e gastronomia regional.',
    events
  });
});

app.get('/dicas-de-viagem', (req, res) => {
  renderPage(res, 'tips', {
    active: 'tips',
    pageTitle: 'Dicas de Viagem para Belém | Visite Belém',
    pageDescription:
      'Planeje sua viagem para Belém com dicas de clima, transporte, segurança, pagamentos, internet e costumes locais.',
    tips
  });
});

app.get('/sobre-belem', (req, res) => {
  renderPage(res, 'about', {
    active: 'about',
    pageTitle: 'Sobre Belém do Pará | Visite Belém',
    pageDescription:
      'Conheça a história, a cultura amazônica, a importância geográfica e a identidade ribeirinha de Belém do Pará.'
  });
});

app.get('/contato', (req, res) => {
  renderPage(res, 'contact', {
    active: 'contact',
    pageTitle: 'Contato | Visite Belém',
    pageDescription:
      'Fale com o portal Visite Belém para informações turísticas, orientações e sugestões de roteiro.'
  });
});

app.post('/contato', (req, res) => {
  renderPage(res, 'contact', {
    active: 'contact',
    pageTitle: 'Mensagem enviada | Visite Belém',
    pageDescription:
      'Obrigado por entrar em contato com o portal Visite Belém.',
    success:
      'Mensagem recebida. Esta é uma demonstração; conecte o formulário a um serviço de envio para uso em produção.'
  });
});

app.use((req, res) => {
  res.status(404);
  renderPage(res, '404', {
    active: '',
    pageTitle: 'Página não encontrada | Visite Belém',
    pageDescription:
      'A página solicitada não foi encontrada no portal Visite Belém.'
  });
});

app.listen(PORT, () => {
  console.log(`Visite Belém rodando em http://localhost:${PORT}`);
});
