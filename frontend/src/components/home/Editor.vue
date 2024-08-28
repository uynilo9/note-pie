<script lang="ts" setup>
	import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
	import { replaceAll } from '@milkdown/utils';

	// TODO: Implement this
	// import { codeBlockComponent, codeBlockConfig } from '@milkdown/components/code-block';
	// import { languages } from '@codemirror/language-data';
	// import { basicSetup } from 'codemirror';
	// import { oneDark } from '@codemirror/theme-one-dark';
	// import { keymap } from '@codemirror/view';
	// import { defaultKeymap, indentWithTab } from '@codemirror/commands';
	// import { html } from '@milkdown/components';

	import { listener, listenerCtx } from '@milkdown/plugin-listener';
	import { history, historyKeymap } from '@milkdown/plugin-history';
	import { indent , indentConfig, IndentConfigOptions } from '@milkdown/plugin-indent';
	import { cursor } from '@milkdown/plugin-cursor';
	import { clipboard } from '@milkdown/plugin-clipboard';
	import { commonmark } from '@milkdown/preset-commonmark';
	import { nord } from '@milkdown/theme-nord';
	import '@milkdown/theme-nord/style.css';

	// TODO: Remove this
	import { prism, prismConfig } from '@milkdown/plugin-prism';
	import '@assets/themes/nord.min.css';
	import md from 'refractor/lang/markdown';
	import css from 'refractor/lang/css';
	import js from 'refractor/lang/javascript';
	import ts from 'refractor/lang/typescript';
	import jsx from 'refractor/lang/jsx';
	import tsx from 'refractor/lang/tsx';
	import go from 'refractor/lang/go';
	const langs = [md, css, js, ts, jsx, tsx, go];

	// TODO: Use store here
	const colour = '#81a1c1';

	import * as vue from 'vue';
	import * as pinia from 'pinia';

	import * as store from '@store/stores';
	const noteStore = store.useNoteStore();
	const { shownNoteId } = pinia.storeToRefs(noteStore);

	const editor = Editor.make()
		.config((context) => {
			context.set(rootCtx, '#editor');
			context.set(defaultValueCtx, '');
		})
		// TODO: Implement this
		// .use(codeBlockComponent)
		// .config((context) => {
		// 	context.update(codeBlockConfig.key, (defualtConfigs) => ({
		// 		...defualtConfigs,
		// 		languages: languages,
		// 		extensions: [
		// 			basicSetup,
		// 			keymap.of(defaultKeymap.concat(indentWithTab)),
		// 			oneDark,
		// 		],
		// 	}));
		// })
		.use(listener)
		.config((context) => {
			const listener = context.get(listenerCtx);
			listener.markdownUpdated((_, newContent, oldContent) => {
				if (
					noteStore.shownNoteId === noteStore.lastShownNoteId &&
					newContent !== oldContent
				)
					noteStore.updateNote(newContent);
				else noteStore.lastShownNoteId = noteStore.shownNoteId;
			});
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
		// TODO: Remove this
		.use(prism)
		.config((context) => {
			context.set(prismConfig.key, {
				configureRefractor: (refractor) => {
					langs.forEach((lang) => {
						refractor.register(lang);
					});
				},
			});
		})
		.create();

	vue.watch(shownNoteId, async () => {
		(await editor).action(replaceAll(noteStore.selectedNoteContent ?? '', true));
	});
</script>
<template>
	<div
		v-show="!noteStore.noShownNote"
		id="editor"
		class="min-w-100% outline-none caret-[#81a1c1] selection:bg-[#81a1c1]/50 prose prose-light"
		spellcheck="false"
	></div>
</template>
<style lang="sass">
	.milkdown .editor
		min-width: 100%

		p
			margin: 0.5rem 0
			line-height: 1rem

		h1, h2
			margin: 1rem 0
			line-height: 3rem

		h3, h4
			margin: 0.75rem 0
			line-height: 2rem

		ul, ol
			margin: 0.75rem 0

			li::marker
				color: v-bind(colour)

		blockquote
			margin: 0.5rem 0
			border-color: v-bind(colour)

		pre
			margin: 0.5rem 0
			padding: 1rem 1rem
			background: rgba(25, 25, 25, 0.5)
			line-height: 1.25rem

</style>
