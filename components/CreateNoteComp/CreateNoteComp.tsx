import { getCategories } from '@/lib/api/api';
import NoteForm from '../NoteForm/NoteForm';

const CreateNoteComp = async () => {
  const categories = await getCategories();

  return <NoteForm categories={categories} />;
};

export default CreateNoteComp;
