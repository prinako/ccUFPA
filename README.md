# Visite Belém

Portal moderno de turismo para Belém do Pará, criado com Node.js, Express.js, EJS, CSS vanilla e JavaScript vanilla.

O site apresenta atrações, gastronomia, eventos, dicas de viagem, informações sobre a cidade e uma página de contato. Todo o conteúdo está em português do Brasil e foi escrito com tom profissional, amigável e adequado para visitantes.

## Tecnologias

- Node.js
- Express.js
- EJS
- CSS vanilla
- JavaScript vanilla
- Layout responsivo
- SEO básico por página

## Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

Acesse no navegador:

```text
http://localhost:3000
```

Para desenvolvimento com recarregamento automático, use:

```bash
npm run dev
```

## Rotas

- `/` - Home
- `/atracoes` - Atrações turísticas
- `/gastronomia` - Gastronomia paraense
- `/eventos` - Eventos
- `/dicas-de-viagem` - Dicas de viagem
- `/sobre-belem` - Sobre Belém
- `/contato` - Contato

O projeto também inclui uma página 404 para rotas não encontradas.

## Estrutura

```text
.
├── server.js
├── package.json
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── hero-belem.jpg
│       ├── ver-o-peso.jpg
│       ├── estacao-docas.jpg
│       ├── mangal-garcas.jpg
│       ├── theatro-paz.jpg
│       ├── basilica-nazare.jpg
│       ├── forte-presepio.jpg
│       ├── ilha-combu.jpg
│       ├── utinga.jpg
│       ├── tacaca.jpg
│       ├── acai.jpg
│       ├── manicoba.jpg
│       └── pato-tucupi.jpg
└── views/
    ├── partials/
    │   ├── header.ejs
    │   └── footer.ejs
    └── pages/
        ├── home.ejs
        ├── attractions.ejs
        ├── gastronomy.ejs
        ├── events.ejs
        ├── tips.ejs
        ├── about.ejs
        ├── contact.ejs
        └── 404.ejs
```

## Imagens

Os arquivos em `public/images` são placeholders JPEG com os nomes esperados pelo HTML. Para usar imagens reais, substitua os arquivos mantendo os mesmos nomes.

As páginas usam:

- Texto alternativo descritivo
- `loading="lazy"` em imagens de cards e listas
- Overlays e tratamento visual para boa leitura
- Efeito de zoom no hover

## Recursos Implementados

- Navegação sticky com link ativo
- Menu mobile acessível
- Hero grande na home
- Cards responsivos para atrações e gastronomia
- Seções de destaques, depoimentos e chamada para ação
- Formulário de contato demonstrativo
- Metatags de SEO e Open Graph
- CSS com variáveis de cores
- Layout mobile-first com media queries
- Rolagem suave e pequenas interações em JavaScript

## Observações

O formulário de contato exibe uma mensagem de sucesso demonstrativa. Para produção, conecte o envio a um serviço de e-mail, CRM ou backend próprio.

Horários, locais e informações operacionais aparecem como placeholders quando podem variar. Antes de publicar oficialmente, confirme dados atualizados em fontes institucionais e estabelecimentos locais.
