export const mainURL = "http://localhost:4500";
const url = mainURL + "/";

const podcast = {
  getPodcasts: url + "podcasts", // GET
};

const API = {
  podcast,
};
export default API;
