const { fetchData } = require('./http');

fetchData()
  .then(res => printInDom(res));

const printInDom = (post) => {
  return `<p>${post.title}</p>`;
}