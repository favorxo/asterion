const axios = require('axios');

const get = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    return e;
  }
};

module.exports = get