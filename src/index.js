import axios from "axios";
const API_URL = "https://api-shortener-url-with-domain.herokuapp.com/api/v1";

async function shortener(url, domain) {
  const response = await axios.post(`${API_URL}/shortener`, {
    url: url,
    domain: domain,
  });
  return response.data.url || "error to convert";
}

async function getUrl(shortUrl) {
  const response = await axios.get(`${API_URL}/url/${shortUrl}`);
  return response.data.url || "error to convert";
}

module.exports = {
  shortener,
  getUrl,
};
