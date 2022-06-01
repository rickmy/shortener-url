import axios from "axios";
const API_URL = "https://api-shortener-url-with-domain.herokuapp.com/api/v1";

async function shortener(link, domain) {
  const response = await axios
    .post(`${API_URL}/shortener`, {
      url: link,
      domain: domain,
    })
    .then((res) => {
      return res.data.url;
    })
    .catch((error) => {
      return error.response.data.error;
    });
  return response;
}

async function getUrl(shortUrl) {
  if(!shortUrl) return 'Link not found';
  const response = await axios
    .get(`${API_URL}/url/${shortUrl}`)
    .then((res) => {
      return res.data.url;
    })
    .catch((error) => {
      return null;
    });
  return response;
}
module.exports = {
  shortener,
  getUrl,
};
