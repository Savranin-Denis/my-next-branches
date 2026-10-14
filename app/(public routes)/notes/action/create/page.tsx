import CreateNoteComp from '@/components/CreateNoteComp/CreateNoteComp';
import Loader from '@/components/Loader/Loader';
import { Suspense } from 'react';

const CreateNote = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <CreateNoteComp />
    </Suspense>
  );
};

export default CreateNote;
