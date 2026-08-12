# ONE FRAME — Landing Page

Landing page em React + TypeScript + Vite + styled-components, construída a partir dos materiais visuais fornecidos.

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

- `src/App.tsx` — página e conteúdo inicial.
- `src/styles/global.ts` — reset, tipografia base e animações.
- `public/assets/` — texturas e símbolo gráfico fornecidos.

## Projetos e banco de dados

O bloco `projects` em `src/App.tsx` é propositalmente isolado. Na próxima etapa ele pode ser substituído por uma chamada `GET /projects`, preservando a interface do card.

Campos sugeridos para a futura API:

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

Os textos institucionais desta primeira versão são uma proposta editorial baseada no posicionamento visual apresentado; podem ser substituídos pelo conteúdo definitivo do cliente.
