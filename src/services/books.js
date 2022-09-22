import axios from 'axios';

const baseUrl = 'http://18.177.140.79:8080/books/';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const booksService = { getAll };
export default booksService;