import * as vue from 'vue';
import * as pinia from 'pinia';
import * as vuse from '@vueuse/core';

import * as datefns from 'date-fns';

export const useNoteStore = pinia.defineStore('note', () => {
	const noteData: vue.Ref<Note[]> = vuse.useLocalStorage('note-data', []);

	const noNoteData = vue.computed(() => {
		return noteData.value.length === 0;
	});

	const noteList = vue.computed(() => {
		return noteData.value;
	});

	const orderedNoteList = vue.computed(() => {
		if (!!noteList) {
			noteList.value.forEach((note, index) => {
				note.info.rawIndex = index;
				// TODO: Use store here to specify the format of time
				note.info.formattedEditedTime = datefns.format(
					note.info.rawEditedTime,
					'HH:mm - MMM Qo, yyyy'
				);
			});

			const pinnedNotes = noteList.value.filter(
				(note) => note.info.isPinned
			);
			const nonpinnedNotes = noteList.value.filter(
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

	const selectedNoteIndex: vue.Ref<number | null> = vue.ref(null);

	const selectedNoteContent = vue.computed(() => {
		const index = selectedNoteIndex.value;
		return index !== null ? noteList.value[index].content : null;
	});

	const selectNote = (index: number) => {
		if (index + 1 <= noteList.value.length) selectedNoteIndex.value = index;
		else selectedNoteIndex.value = null;
	};


	const updateNote = (content: string) => {
		const index = selectedNoteIndex.value;
		if (index === null) return;
		noteData.value[index].content = content;
		noteData.value[index].info.rawEditedTime = new Date().getTime();
	};

	const newNote = (
		note: Note = {
			info: {
				title: 'Untitled note',
				isPinned: false,
				rawIndex: -1,
				rawEditedTime: new Date().getTime(),
			},
			content: '',
		}
	) => {
		noteData.value.push(note);
		selectedNoteIndex.value = null;
	};

	const duplicateNote = () => {
		const index = selectedNoteIndex.value;
		if (index === null) return;
		const note = noteData.value[index];
		note.info.rawIndex = -1;
		newNote(note);
	};

	const deleteNote = () => {
		const index = selectedNoteIndex.value;
		if (index === null) return;
		noteData.value = noteData.value.filter((item) => {
			return item.info.rawIndex !== index;
		});
		selectedNoteIndex.value = null;
	};

	return {
		noteData,
		noNoteData,
		noteList,
		orderedNoteList,
		selectedNoteIndex,
		selectedNoteContent,
		selectNote,
		updateNote,
		newNote,
		duplicateNote,
		deleteNote,
	};
});
