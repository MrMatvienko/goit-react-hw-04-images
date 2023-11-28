import axios from 'axios';

const API_KEY = '39979032-c72900008a85800a5a967ce49';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Oops... there are no ${query} images matching your search...`
      );
    }
  } catch (error) {
    throw new Error(`Error fetching images: ${error.message}`);
  }
};
