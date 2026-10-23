import axios from 'axios';

// axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

// axios.defaults.baseURL = 'http://localhost:3000/api';

// Створюємо інстанс axios
export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // дозволяє axios працювати з cookie
});

// export const getNotes = async () => {
//   const res = await axios.get<NoteListResponse>('/notes');
//   return res.data;
// };
