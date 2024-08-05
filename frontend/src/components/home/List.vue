<script lang="ts" setup>
	import Button from '@components/Button.vue';

	import { noteInfos as rawNoteInfos } from '@mocks/notes';

	import * as vue from 'vue';
	const noteInfos = vue.ref(rawNoteInfos.value);

	import * as datefns from 'date-fns';

	vue.watchEffect(() => {
		// TODO: Use store here
		rawNoteInfos.value.forEach((note) => {
			note.formattedEditedTime = datefns.format(note.rawEditedTime, 'HH:mm - MMM Qo, yyyy')
		});

		const pinnedNotes = rawNoteInfos.value.filter((note) => note.isPinned);
		const nonpinnedNotes = rawNoteInfos.value.filter((note) => !note.isPinned);

		pinnedNotes.sort((x, y) => y.rawEditedTime - x.rawEditedTime);
		nonpinnedNotes.sort((x, y) => y.rawEditedTime - x.rawEditedTime);

		noteInfos.value = [...pinnedNotes, ...nonpinnedNotes];
	});
</script>
<template>
	<div class="max-h-inherit flex flex-col gap-1.5 overflow-auto">
		<div
			v-for="noteInfo in noteInfos"
			class="
				px-2.5 py-2 w-full h-17.5 flex flex-col text-light-500 rounded-md
				transition-colors duration-200 ease-in-out cursor-pointer hover:bg-zinc-600/50
				*:my-auto *:select-none
			"
		>
			<b class="text-4 truncate">{{ noteInfo.title }}</b>
			<div class="flex flex-row justify-between">
				<p class="text-3">{{ noteInfo.formattedEditedTime }}</p>
				<Button
					v-if="noteInfo.isPinned"
					icon="list-icon-note-pinned"
					title="Unpin"
					@click="noteInfo.isPinned = false"
				/>
				<Button
					v-else
					icon="list-icon-note-not-pinned"
					title="Pin"
					@click="noteInfo.isPinned = true"
				/>
			</div>
		</div>
	</div>
</template>
