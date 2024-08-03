import * as vue from 'vue';

export const noteInfos: vue.Ref<NoteInfo[]> = vue.ref([
	{
		title: 'Hello from Note-pie 🥧',
		isPinned: true,
		rawEditedTime: new Date(12, 0, 1, 10, 45, 0, 0).getTime(),
	},
	{
		title: 'Guide to start noting ✏️',
		isPinned: true,
		rawEditedTime: new Date(11, 9, 10, 15, 37, 0, 0).getTime(),
	},
	{
		title: 'Hello, World',
		isPinned: false,
		rawEditedTime: new Date(2009, 1, 13, 4, 19, 0, 0).getTime(),
	},
	{
		title: '你好，世界',
		isPinned: false,
		rawEditedTime: new Date(2008, 2, 20, 23, 26, 0, 0).getTime(),
	},
]);
