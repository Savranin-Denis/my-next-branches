// import Modal from '@/components/Modal/Modal';
// import { getSingleNote } from '@/lib/api';

// type Props = {
//   params: Promise<{ id: string }>;
// };

// const NotePreview = async ({ params }: Props) => {
//   const { id } = await params;
//   const note = await getSingleNote(id);

//   return (
//     <Modal>
//       <h2>{note.title}</h2>
//       <p>{note.content}</p>
//     </Modal>
//   );
// };

// export default NotePreview;

import Loader from '@/components/Loader/Loader';
import NotePreview from '@/components/NotePreview/NotePreview';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

const Preview = ({ params }: Props) => {
  return (
    <Suspense fallback={<Loader />}>
      <NotePreview params={params} />
    </Suspense>
  );
};

export default Preview;
