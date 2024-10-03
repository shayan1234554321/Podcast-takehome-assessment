import { filterPodcasts, paginatePodcasts } from "../../hooks/database.js";
import { data } from "../../mock.js";

const getAllPodcasts = async ({ query }) => {
  const filteredPodcasts = filterPodcasts(data, query);
  const totalItems = filteredPodcasts.length;
  const paginatedPodcasts = paginatePodcasts(
    filteredPodcasts,
    query.page,
    query.limit
  );

  const pageSize = parseInt(query.limit, 10) || 9;
  const totalPages = Math.ceil(totalItems / pageSize);
  const currentPage = parseInt(query.page, 10) || 1;

  return {
    status: 200,
    contentType: "application/json",
    data: {
      podcasts: paginatedPodcasts,
      totalItems,
      totalPages,
      currentPage,
    },
  };
};

const view = {
  getAllPodcasts,
};

export default view;
