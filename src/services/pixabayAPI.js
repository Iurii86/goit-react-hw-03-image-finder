import axios from 'axios';
const API_KEY = '33959697-be4e6db702be68ffc1fd9029f';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImage(keyword, page) {
  try {
    return await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: keyword,
        image_type: 'photo',
        page: page,
        per_page: 12,
      },
    });
  } catch (err) {
    return err;
  }
}
