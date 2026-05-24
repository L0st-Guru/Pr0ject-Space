# Pr0ject: Space

Scroll-driven, cinematic holding site for the Pr0ject: brand portfolio.

**Stack:** Astro → GitHub → Vercel  
**Live:** [pr0ject.space](https://pr0ject.space)

## Setup

```sh
npm install
npm run dev      # localhost:4321
npm run build
npm run preview
```

## Adding a Pr0ject

Five lines in `projects.config.js`:

```js
{
  id: 'project-slug',
  name: 'Pr0ject: Name',
  tagline: 'One-line description.',
  url: 'https://...',
  status: 'live', // live | beta | building | soon
},
```
