type Page = 'note-pie' | 'parameters';

type NoteInfo = {
	id: string;
	title: string;
	isPinned: boolean;
	rawEditedTime: number;
	formattedEditedTime?: string;
};
type NoteContent = string;
type Note = {
	info: NoteInfo;
	content: NoteContent;
};

type Parameter = 'themes' | 'fonts' | 'formats' | 'update' | 'about';
