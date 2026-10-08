import { Note } from '@/lib/api';
import Link from 'next/link';

type Props = {
  item: Note;
};

const Noteitem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default Noteitem;
