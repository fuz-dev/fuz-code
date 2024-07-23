// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_code',
	version: '0.17.0',
	description: 'syntax highlighting using prismjs for Svelte, SvelteKit, TypeScript, and Fuz',
	glyph: '🎨',
	logo: 'logo.svg',
	logo_alt: 'a friendly pink spider facing you',
	public: true,
	license: 'MIT',
	homepage: 'https://code.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_code',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/fuz_code/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.12'},
	peerDependencies: {
		'@ryanatkn/moss': '*',
		'prism-svelte': '^0.5',
		prismjs: '^1',
		svelte: '^5.0.0-next.0',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.24.11',
		'@ryanatkn/eslint-config': '^0.4.2',
		'@ryanatkn/fuz': '^0.118.2',
		'@ryanatkn/gro': '^0.133.4',
		'@ryanatkn/moss': '^0.11.1',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.18',
		'@sveltejs/package': '^2.3.2',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'@types/prismjs': '^1.26.4',
		eslint: '^9.7.0',
		'eslint-plugin-svelte': '^2.43.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.6',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.195',
		'svelte-check': '^3.8.4',
		tslib: '^2.6.3',
		typescript: '^5.5.4',
		'typescript-eslint': '^8.0.0-alpha.44',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist', 'src/lib/**/*.ts', '!src/lib/**/*.test.*', '!dist/**/*.test.*'],
	exports: {
		'./package.json': './package.json',
		'./Code.svelte': {
			types: './dist/Code.svelte.d.ts',
			svelte: './dist/Code.svelte',
			default: './dist/Code.svelte',
		},
		'./prism.css': {default: './dist/prism.css'},
		'./remove_prism_css_vite_plugin.js': {
			types: './dist/remove_prism_css_vite_plugin.d.ts',
			default: './dist/remove_prism_css_vite_plugin.js',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_code',
	version: '0.17.0',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./Code.svelte': {path: 'Code.svelte', declarations: []},
		'./prism.css': {path: 'prism.css', declarations: []},
		'./remove_prism_css_vite_plugin.js': {
			path: 'remove_prism_css_vite_plugin.ts',
			declarations: [{name: 'remove_prism_css', kind: 'function'}],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
