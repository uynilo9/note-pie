import * as vue from 'vue';
import * as pinia from 'pinia';

import * as datefns from 'date-fns';

import { noteDatas } from '@mocks/notes';

export const useNoteStore = pinia.defineStore('note', () => {
	const rawNoteList = noteDatas;

	const orderedNoteList = vue.computed(() => {
		if (!!noteDatas) {
			rawNoteList.forEach((note, index) => {
				note.info.rawIndex = index;
				// TODO: Use store here to specify the format of time
				note.info.formattedEditedTime = datefns.format(
					note.info.rawEditedTime,
					'HH:mm - MMM Qo, yyyy'
				);
			});

			const pinnedNotes = rawNoteList.filter(
				(note) => note.info.isPinned
			);
			const nonpinnedNotes = rawNoteList.filter(
				(note) => !note.info.isPinned
			);

			pinnedNotes.sort(
				(x, y) => y.info.rawEditedTime - x.info.rawEditedTime
			);
			nonpinnedNotes.sort(
				(x, y) => y.info.rawEditedTime - x.info.rawEditedTime
			);

			return [...pinnedNotes, ...nonpinnedNotes];
		} else return null;
	});

	const selectedNoteRawIndex: vue.Ref<number | null> = vue.ref(null);

	const selectedNoteContent = vue.computed(() => {
		const index = selectedNoteRawIndex.value;
		return index !== null ? rawNoteList[index].content : null;
	});

	const selectNote = (index: number) => {
		if (index + 1 <= rawNoteList.length) selectedNoteRawIndex.value = index;
		else selectedNoteRawIndex.value = null;
	};

	return {
		rawNoteList,
		orderedNoteList,
		selectedNoteRawIndex,
		selectedNoteContent,
		selectNote,
	};
});
