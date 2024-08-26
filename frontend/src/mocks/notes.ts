import * as vue from 'vue';

export const noteData: vue.Ref<Note[]> = vue.ref([
	{
		info: {
			title: 'Hello from Note-pie 🥧',
			isPinned: true,
			rawIndex: -1,
			rawEditedTime: new Date(12, 0, 1, 10, 45, 0, 0).getTime(),
		},
		content: `# Hello from Note-pie 🥧\n> Let's get started using Note-pie`,
	},
	{
		info: {
			title: 'Guide to start noting ✏️',
			isPinned: true,
			rawIndex: -1,
			rawEditedTime: new Date(11, 9, 10, 15, 37, 0, 0).getTime(),
		},
		content: `## No explaining just use it`,
	},
	{
		info: {
			title: 'Hello, World',
			isPinned: false,
			rawIndex: -1,
			rawEditedTime: new Date(2009, 1, 13, 4, 19, 0, 0).getTime(),
		},
		content: `# Hello, World\n## Hello, World\n### Hello, World\n#### Hello, World`,
	},
	{
		info: {
			title: '你好，世界',
			isPinned: false,
			rawIndex: -1,
			rawEditedTime: new Date(2008, 2, 20, 23, 26, 0, 0).getTime(),
		},
		content: `# 你好，世界\n## 你好，世界\n### 你好，世界\n#### 你好，世界`,
	},
]);
