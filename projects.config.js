/**
 * projects.config.js
 * Single source of truth for all Pr0jects and philosophy banners.
 *
 * isLive: true = accent dot + glow on status badge
 * image: path to bg image (used as low-opacity card background)
 * problem/solution: if present, renders P/S format; otherwise uses tagline
 */

export const projects = [
  {
    id: 'cyberpipeline',
    num: '01',
    displayId: 'CyberPipeline',
    name: 'PR0JECT:PIPELINE',
    problem: 'Too bloated, wrong focus, no guidance. You\'re dumping information, not making decisions.',
    solution: 'A narrowed, structured deal qualification tool. Know where you are with every deal. Built for cybersecurity sales specifically.',
    tagline: null,
    url: 'https://cyberpipeline.pr0ject.space',
    urlLabel: 'cyberpipeline.pr0ject.space',
    isLive: true,
    statusLabel: 'Live soon',
    image: null,
  },
  {
    id: 'console',
    num: '02',
    displayId: 'Console',
    name: 'PR0JECT:CONSOLE',
    problem: 'Your sales collateral is scattered across email threads nobody can find. The customer is doing your admin for you.',
    solution: 'Every deal gets its own space. One link. Videos, timelines, roadmaps, assets, financials — all there. You control it. They just show up.',
    tagline: null,
    url: null,
    urlLabel: 'console.pr0ject.space',
    isLive: false,
    statusLabel: 'Coming soon',
    image: null,
  },
  {
    id: 'coeus',
    num: '03',
    displayId: 'Coeus',
    name: 'PR0JECT:COEUS',
    problem: null,
    solution: null,
    tagline: 'I think out loud in essays. What I\'m seeing, where it\'s going, and why it matters. If you\'re asking the same questions — come in.',
    url: null,
    urlLabel: 'Substack · Long-form',
    isLive: true,
    statusLabel: 'Live',
    image: null,
  },
  {
    id: 'janus',
    num: '04',
    displayId: 'Janus',
    name: 'PR0JECT:JANUS',
    problem: null,
    solution: null,
    tagline: null,
    url: null,
    urlLabel: '—',
    isLive: false,
    statusLabel: 'Coming soon',
    image: '/images/Janus%20smiling.png',
  },
];

export const philosophyBanners = [
  {
    num: 'i.',
    numLabel: 'Law one',
    law: 'Kidlin\'s Law',
    text: '"If you can write the problem down clearly, you\'re halfway to solving it."',
    discipline: 'Diagnosis',
    form: 'Operational',
    citedIn: 'CyberPipeline',
  },
  {
    num: 'ii.',
    numLabel: 'Law two',
    law: 'First Principles',
    text: '"Strip it back to what\'s actually true, then build from there."',
    discipline: 'Method',
    form: 'Foundational',
    citedIn: 'Console',
  },
  {
    num: 'iii.',
    numLabel: 'Law three',
    law: 'Jevons Paradox',
    text: '"Efficiency creates demand. Build accordingly."',
    discipline: 'Economics',
    form: 'Cautionary',
    citedIn: 'Janus',
  },
];
