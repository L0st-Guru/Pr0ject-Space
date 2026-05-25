/**
 * projects.config.js
 * Single source of truth for all Pr0jects and philosophy banners.
 * Adding a new Pr0ject = 5 lines in the projects array.
 *
 * status: 'live' | 'beta' | 'building' | 'soon'
 * url: null if TBC
 */

export const projects = [
  {
    id: 'cyberpipeline',
    name: 'CyberPipeline',
    tagline: 'A focused deal qualification tool. Know exactly where you are with every opportunity. Built around closing, not cataloguing.',
    url: 'https://cyberpipeline.pr0ject.space',
    status: 'soon',
    image: '/images/Plutus%20working.png',
  },
  {
    id: 'console',
    name: 'Console',
    tagline: 'Every deal gets its own space. Videos, timelines, roadmaps, assets, financials. One link. You control it, they just show up.',
    url: 'https://console.pr0ject.space',
    status: 'soon',
    image: '/images/Narcissus%20Presenting%202.png',
  },
  {
    id: 'janus',
    name: 'Janus',
    tagline: null,
    url: null,
    status: 'soon',
    image: '/images/Janus%20smiling.png',
  },
  {
    id: 'coeus',
    name: 'Coeus',
    tagline: 'I think out loud in essays. What I\'m seeing, where it\'s going, and why it matters. If you\'re asking the same questions — come in.',
    url: null,
    status: 'soon',
    image: null,
  },
];

export const philosophyBanners = [
  {
    law: 'Kidlin\'s Law',
    text: 'If you can write the problem down clearly, you\'re halfway to solving it.',
  },
  {
    law: 'First Principles',
    text: 'Strip it back to what\'s actually true, then build from there.',
  },
  {
    law: 'Jevons Paradox',
    text: 'Efficiency creates demand. Build accordingly.',
  },
];
