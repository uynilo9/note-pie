type Page = 'note-pie' | 'parameters';

type NoteInfo = {
	title: string;
	isPinned: boolean;
	rawEditedTime: number;
	formattedEditedTime?: string;
};
type NoteContent = string;
// type Note = {
// 	info: NoteInfo;
// 	content: NoteContent;
// };

type Parameter = 'formats' | 'fonts' | 'update' | 'about';
// type ParameterMap = Record<string, string>;
