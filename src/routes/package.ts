// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_code',
	description: 'syntax highlighting using prismjs for Svelte, SvelteKit, TypeScript, and Fuz',
	version: '0.9.0',
	public: true,
	license: 'MIT',
	type: 'module',
	homepage: 'https://code.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_code',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {'prism-svelte': '*', prismjs: '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.20.4',
		'@ryanatkn/eslint-config': '^0.1.0',
		'@ryanatkn/fuz': '^0.88.0',
		'@ryanatkn/gro': '^0.112.3',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.1',
		'@sveltejs/package': '^2.2.7',
		'@sveltejs/vite-plugin-svelte': '^3.0.2',
		'@types/prismjs': '^1.26.3',
		'@typescript-eslint/eslint-plugin': '^7.0.2',
		'@typescript-eslint/parser': '^7.0.2',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.1',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.12',
		'svelte-check': '^3.6.4',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Code.svelte': {
			svelte: './dist/Code.svelte',
			default: './dist/Code.svelte',
			types: './dist/Code.svelte.d.ts',
		},
		'./prism.css': {default: './dist/prism.css'},
		'./remove_prism_css_vite_plugin.js': {
			default: './dist/remove_prism_css_vite_plugin.js',
			types: './dist/remove_prism_css_vite_plugin.d.ts',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_code',
	version: '0.9.0',
	modules: {
		'./Code.svelte': {path: 'Code.svelte', declarations: []},
		'./prism.css': {path: 'prism.css', declarations: []},
		'./remove_prism_css_vite_plugin.js': {
			path: 'remove_prism_css_vite_plugin.ts',
			declarations: [{name: 'remove_prism_css', kind: 'function'}],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
