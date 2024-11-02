// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_code',
	version: '0.20.0',
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
	engines: {node: '>=20.17'},
	peerDependencies: {'@ryanatkn/moss': '*', 'prism-svelte': '^0.5', prismjs: '^1', svelte: '^5'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.26.1',
		'@ryanatkn/eslint-config': '^0.5.6',
		'@ryanatkn/fuz': '^0.130.3',
		'@ryanatkn/gro': '^0.146.1',
		'@ryanatkn/moss': '^0.20.2',
		'@sveltejs/adapter-static': '^3.0.6',
		'@sveltejs/kit': '^2.7.4',
		'@sveltejs/package': '^2.3.7',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		'@types/prismjs': '^1.26.5',
		eslint: '^9.14.0',
		'eslint-plugin-svelte': '^2.46.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.1.9',
		'svelte-check': '^4.0.5',
		tslib: '^2.8.1',
		typescript: '^5.6.3',
		'typescript-eslint': '^8.12.2',
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
	version: '0.20.0',
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
