import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '34935791-73eb810d15f915878d8eca6fb';

export const getImages = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
