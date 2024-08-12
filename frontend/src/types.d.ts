type Page = 'note-pie' | 'parameters';

type NoteInfo = {
	title: string;
	isPinned: boolean;
	rawIndex: number;
	rawEditedTime: number;
	formattedEditedTime?: string;
};
type NoteContent = string;
type Note = {
	info: NoteInfo;
	content: NoteContent;
};

type Parameter = 'themes' | 'fonts' | 'formats' | 'update' | 'about';
