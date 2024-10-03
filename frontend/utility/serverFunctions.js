import axios from "axios";
import API from "./api";

export const getPodcasts = async (value, type, page, limit) => {
  try {
    let url = `${API.podcast.getPodcasts}?page=${page}&limit=${limit}`;

    if (value.length > 0) {
      url += `&${type}=${value}`;
    }

    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    if (err?.response?.status === 429) {
      return { error: "Too Many Requests" };
    } else {
      return { error: "Something went wrong" };
    }
  }
};
