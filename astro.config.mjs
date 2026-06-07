// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/config/sidebar';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import tokyoNight from 'shiki/themes/tokyo-night.mjs';
import onelight from 'shiki/themes/one-light.mjs'
// import catppuccin from 'shiki/themes/catppuccin-latte.mjs';
// import light from 'shiki/themes/light-plus.mjs'

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
        themes: [tokyoNight, onelight],
        useDarkModeMediaQuery: true,
        defaultProps: {
          wrap: false,
          showLineNumbers: false,
        },
        plugins: [pluginLineNumbers()],
      },
      sidebar: sidebar,
    }),
  ],
});
