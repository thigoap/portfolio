const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = () => {
  return client
  .getEntries({
    content_type: 'arts',
    // order: 'sys.createdAt'
  })
  .then((response) => {
    return response.items
  })
  .catch(console.error)
}