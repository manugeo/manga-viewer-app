import axios from 'axios';

const baseUrl = 'http://18.177.140.79:8080/chapters/';

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}${id}/`);
  return response.data;
};

const getChapters = async (ids = []) => {
  let chapters = [];
  for await (const id of ids) {
    const chapter = await getById(id);
    chapters.push(chapter);
  }
  console.log('chapters :', chapters);
  return chapters;
};

const chaptersService = { getById, getChapters };
export default chaptersService;