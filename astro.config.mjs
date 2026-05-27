// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/config/sidebar';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Juan Vladimir | Trainner',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/juanvladimir13' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/c/juanvladimir13' },
        { icon: 'tiktok', label: 'Tik Tok', href: 'https://www.tiktok.com/@juanvladimir13' },
      ],
      expressiveCode: {
        themes: ['one-light', 'tokyo-night', 'monokai'],
        defaultProps: {
          wrap: true,
          showLineNumbers: false,
          overridesByLang: {
            'bash,ps,sh': { preserveIndent: false },
          },
        },
        plugins: [pluginLineNumbers()],
      },
      sidebar: sidebar,
    }),
  ],
});
