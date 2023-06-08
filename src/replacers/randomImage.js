module.exports = async function () {
  imageTypes=['code', 'hacker', 'internet', 'computer', 'web', 'java', 'technology', 'javascript']

  const randomImageType = Math.floor(Math.random() *  imageTypes.length)

  return `<img align="center" alt="Random unsplash image" width="1000" height="500" src="https://source.unsplash.com/random/1000x500/?${imageTypes[randomImageType]}" />`;
};
