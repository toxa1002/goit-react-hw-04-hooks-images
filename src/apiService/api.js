function fetchApi(q, page) {
  const KEY = 'key=23968448-11f2d292972b337bbc3d525d1';
  const BASE_URL = `https://pixabay.com/api/?q=${q}&page=${page}&${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const fetchData = fetch(BASE_URL).then(r => r.json());
  return fetchData;
}

export default fetchApi;
