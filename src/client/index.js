/* eslint-disable no-console */
const axios = require('axios');
const instance = axios.create({
  baseURL: 'https://localhost:3000',
  headers: { 'Content-Type': 'multipart/form-data' }
});

const postFileForMinification = (formData) => {
  instance.post('/image-minifier',
    formData,
  ).then(() => {
    console.log('yes');
  })
  .catch(() => {
    console.log('no :(');
  });
}

export default postFileForMinification
