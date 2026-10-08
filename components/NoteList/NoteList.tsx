import { Note } from '@/lib/api';
import Noteitem from '../Noteitem/Noteitem';

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map(note => (
        <Noteitem key={note.id} item={note} />
      ))}
    </ul>
  );
};

export default NoteList;
