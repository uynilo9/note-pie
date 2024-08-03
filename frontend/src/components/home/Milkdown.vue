<script lang="ts" setup>
	import { Milkdown } from '@milkdown/vue';

	import * as milkdown from '@milkdown/vue';
	import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
	import { history, historyKeymap } from '@milkdown/plugin-history';
	import { indent , indentConfig, IndentConfigOptions } from '@milkdown/plugin-indent';
	import { cursor } from '@milkdown/plugin-cursor';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { nord } from '@milkdown/theme-nord';
	import '@milkdown/theme-nord/style.css';
	import { prism, prismConfig } from '@milkdown/plugin-prism';
	import 'prism-themes/themes/prism-nord.css'

	import md from 'refractor/lang/markdown';
	import css from 'refractor/lang/css';
	import js from 'refractor/lang/javascript';
	import ts from 'refractor/lang/typescript';
	import jsx from 'refractor/lang/jsx';
	import tsx from 'refractor/lang/tsx';
	import go from 'refractor/lang/go';
	const langs = [md, css, js, ts, jsx, tsx, go];

	milkdown.useEditor((root) => {
		return Editor.make()
			.config((context) => {
				context.set(rootCtx, root);
				context.set(defaultValueCtx, '');
			})
			.use(history)
			.config((context) => {
				context.set(historyKeymap.key, {
					Undo: 'Mod-z',
					Redo: ['Mod-y', 'Shift-Mod-z'],
				});
			})
			.use(indent)
			.config((context) => {
				context.set(indentConfig.key, {
					type: 'tab',
					size: 4,
				} as IndentConfigOptions);
			})
			.use(cursor)
			.use(clipboard)
			.use(commonmark)
			.config(nord)
			.use(prism)
			.config((context) => {
				context.set(prismConfig.key, {
					configureRefractor: (refractor) => {
						langs.forEach((lang) => {
							refractor.register(lang);
						});
					},
				});
			});
	});
</script>
<template>
	<Milkdown
		class="min-w-100% min-h-100% outline-none caret-[#81a1c1] selection:bg-[#81a1c1]/50 prose prose-light"
		spellcheck="false"
	/>
</template>
