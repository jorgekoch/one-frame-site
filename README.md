# ONE FRAME — Landing Page

Landing page da ONE FRAME em React + TypeScript + Vite + styled-components.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Estrutura

- `src/App.tsx` — composição principal da página.
- `src/components/` — componentes da landing page.
- `src/data/` — dados de serviços, clientes e projetos.
- `src/styles/global.ts` — estilos globais e acessibilidade.
- `public/assets/` — assets visuais do site.

## Projetos

Os projetos atualmente são definidos em `src/data/projects.ts`, permitindo substituir os dados locais por uma API no futuro sem alterar a interface dos cards.

Campos sugeridos para uma futura API:

```ts
{
  id: string
  title: string
  slug: string
  category: string
  year: number
  coverImage: string
  description?: string
  client?: string
  credits?: string[]
  gallery?: string[]
  featured?: boolean
  published: boolean
}
```

## Qualidade

O projeto possui validação automática de build via GitHub Actions para `main` e pull requests.
