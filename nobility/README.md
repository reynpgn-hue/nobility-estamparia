# 👑 Nobility Estamparia — Site Oficial

## Estrutura do Projeto

```
nobility/
├── index.html              ← Página principal (HTML limpo, sem CSS inline)
├── README.md               ← Este arquivo
│
├── css/
│   ├── variables.css       ← ⚙️  Tokens: cores, fontes, espaçamentos (edite aqui para mudar o visual)
│   ├── base.css            ← Reset + estilos globais + botões reutilizáveis
│   ├── header.css          ← Barra de navegação fixa
│   ├── hero.css            ← Seção de abertura (banner principal)
│   ├── produtos.css        ← Grid de cards e componente de card
│   ├── secoes.css          ← Sobre a marca + Banner CTA
│   ├── footer.css          ← Rodapé + botão WhatsApp flutuante
│   ├── animacoes.css       ← Animações de entrada (fade-up + hero)
│   └── responsivo.css      ← Breakpoints tablet e mobile
│
├── js/
│   └── main.js             ← Comportamentos: menu mobile, scroll animado, header compacto
│
└── img/
    ├── favicon.png         ← Ícone da aba do navegador
    ├── logo-nobility.png   ← Logo completa (usada na seção Sobre)
    ├── nblt.jpg            ← Foto: Camiseta Premium
    ├── nmf.jpg             ← Foto: Linha Feminina
    └── a.jpg               ← Foto: Estampa Personalizada
```

## ✏️ Como editar

### Mudar cores ou fontes
Abra `css/variables.css` — todas as cores e espaçamentos estão lá como variáveis CSS.

### Adicionar um produto
Copie um bloco `<article class="card ...">` dentro de `.produtos__grid` no `index.html`.

### Trocar número do WhatsApp
Busque `5500000000000` no `index.html` e substitua pelo número com DDD (ex: `5521999999999`).

### Adicionar link do Mercado Pago
Substitua `https://mpago.la/SEU-LINK-AQUI` pelo link gerado no painel do Mercado Pago.

### Adicionar novas páginas (futuro)
Crie `sobre.html`, `contato.html` etc. — reutilize os mesmos arquivos CSS.
