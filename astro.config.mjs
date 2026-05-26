// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@juanvladimir13',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/juanvladimir13' }],
			sidebar: [
				{
					label: 'Material de apoyo',
					items: [{ autogenerate: { directory: 'material' } }],
				},
				{
					label: 'Codelabs',
					items: [{ autogenerate: { directory: 'codelabs' } }],
				},
				{
					label: 'Modelos de examenes',
					items: [{ autogenerate: { directory: 'examen' } }],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
