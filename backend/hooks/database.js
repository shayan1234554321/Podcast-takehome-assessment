// Helper function to filter podcasts based on query
export const filterPodcasts = (podcasts, query) => {
  let filteredPodcasts = [...podcasts]; // Start with all podcasts

  // Filter by search term
  if (query.search) {
    const searchRegex = new RegExp(query.search, "i"); // Case insensitive
    filteredPodcasts = filteredPodcasts.filter((podcast) =>
      Object.values(podcast).some((value) => searchRegex.test(value))
    );
  }

  // Filter by title
  if (query.title) {
    filteredPodcasts = filteredPodcasts.filter((podcast) =>
      podcast.title.toLowerCase().includes(query.title.toLowerCase())
    );
  }

  // Filter by category name
  if (query.categoryName) {
    filteredPodcasts = filteredPodcasts.filter((podcast) =>
      podcast.category.toLowerCase().includes(query.categoryName.toLowerCase())
    );
  }

  return filteredPodcasts;
};

// Function to paginate the results
export const paginatePodcasts = (podcasts, page, limit) => {
  const currentPage = parseInt(page, 10) || 1;
  const pageSize = parseInt(limit, 10) || 9;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return podcasts.slice(startIndex, endIndex);
};
