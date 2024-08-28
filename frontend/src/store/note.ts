import * as vue from 'vue';
import * as pinia from 'pinia';
import * as vuse from '@vueuse/core';

import * as datefns from 'date-fns';

export const useNoteStore = pinia.defineStore('note', () => {
	const noteData: vue.Ref<Note[]> = vuse.useLocalStorage('note-data', []);

	const noNoteData = vue.computed(() => {
		return noteData.value.length === 0;
	});

	const orderedNoteList = vue.computed(() => {
		if (!!noteData) {
			const pinnedNotes = noteData.value.filter(
				(note) => note.info.isPinned
			);
			const nonpinnedNotes = noteData.value.filter(
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

	const shownNoteId: vue.Ref<string | null> = vue.ref(null);

	const lastShownNoteId: vue.Ref<string | null> = vue.ref(null);

	vue.watch(shownNoteId, (_, oldValue) => {
		lastShownNoteId.value = oldValue;
	});

	const noShownNote = vue.computed(() => {
		return shownNoteId.value === null ? true : false;
	});

	const selectedNoteContent: vue.Ref<string | null> = vue.ref(null);

	const selectNote = (id: string) => {
		const target = noteData.value.find((note) => note.info.id === id);
		if (!!target) {
			shownNoteId.value = target.info.id;
			selectedNoteContent.value = target.content;
		} else {
			shownNoteId.value = null;
			selectedNoteContent.value = null;
		}
	};

	const updateNote = (content: string) => {
		const id = shownNoteId.value;
		if (id === null) return;
		noteData.value.forEach((note) => {
			if (note.info.id === id) {
				note.content = content;
				note.info.rawEditedTime = new Date().getTime();
				note.info.formattedEditedTime = datefns.format(
					note.info.rawEditedTime,
					'HH:mm - MMM Qo, yyyy'
				);
			};
		});
	};

	const newNote = (
		note: Note = {
			info: {
				id: '',
				title: 'Untitled note',
				isPinned: false,
				rawEditedTime: new Date().getTime(),
			},
			content: '',
		}
	) => {
		note.info.formattedEditedTime = datefns.format(
			note.info.rawEditedTime,
			'HH:mm - MMM Qo, yyyy'
		);
		note.info.id = Math.random().toString(16).slice(2);
		noteData.value.push(note);
		shownNoteId.value = null;
	};

	const renameNote = () => {};

	const duplicateNote = () => {
		const id = shownNoteId.value;
		if (id === null) return;
		const note = noteData.value.find((note) => note.info.id === id);
		if (!note) return;
		newNote({
			info: {
				id: '',
				title: note.info.title,
				isPinned: note.info.isPinned,
				rawEditedTime: note.info.rawEditedTime,
			},
			content: note.content,
		});
		shownNoteId.value = null;
		selectedNoteContent.value = null;
	};

	const deleteNote = () => {
		const id = shownNoteId.value;
		if (id === null) return;
		noteData.value = noteData.value.filter((note) => {
			return note.info.id !== id;
		});
		shownNoteId.value = null;
		selectedNoteContent.value = null;
	};

	return {
		noteData,
		noNoteData,
		orderedNoteList,
		shownNoteId,
		lastShownNoteId,
		noShownNote,
		selectedNoteContent,
		selectNote,
		updateNote,
		newNote,
		renameNote,
		duplicateNote,
		deleteNote,
	};
});
