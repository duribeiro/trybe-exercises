const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = ({id, title, author_id}) => ({
  id,
  title,
  authorId: author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');
  return books.map(serialize);
};

module.exports = {
  getAll,
};
