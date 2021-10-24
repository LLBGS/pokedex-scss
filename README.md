## How to use

- Clone this repository

```bash
    git clone https://github.com/LLBGS/pokedex-scss.git
```

- Install packages

```bash
npm i
# or
yarn 
```

- Run in Dev mode 

```
npm run dev
# or
yarn dev
```

## Project Organization

```
.
├── next.config.js
├── next-env.d.ts
├── package.json
├── pages
│   ├── _app.tsx
│   ├── Details
│   │   ├── [name].tsx
│   │   └── styles.module.scss
│   ├── index.tsx
│   └── MyPokeList
│       ├── index.tsx
│       └── styles.module.scss
├── public
│   ├── favicon.ico
│   ├── logo.png
│   ├── pokedex.png
│   └── vercel.svg
├── README.md
├── src
│   ├── components
│   │   ├── AdvancedSearch
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   ├── helpers
│   │   │   └── Helpers.ts
│   │   ├── List
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   ├── Paginator
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   └── SearchBar
│   │       ├── index.tsx
│   │       └── styles.module.scss
│   ├── contexts
│   │   ├── Context.tsx
│   │   └── Provider.tsx
│   ├── helpers
│   │   └── utils.ts
│   ├── interfaces
│   │   └── PokemonI.ts
│   ├── repository
│   │   └── PokemonRepository.ts
│   ├── services
│   │   └── Api.ts
│   └── types
│       └── PokemonT.ts
├── styles
│   ├── globals.scss
│   ├── Home.module.scss
│   └── reset.scss
├── tsconfig.json
└── yarn.lock

```
