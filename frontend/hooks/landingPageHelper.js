import { getPodcasts } from "@/utility/serverFunctions";

export const handleValueChanges = (
  setSearch,
  setPagination,
  search,
  pagination,
  timeoutId,
  setTimeoutId,
  setPodcasts,
  setLoading,
  setError
) => {
  const onSearchTypeChange = (type) => {
    setError(null);
    setSearch((prev) => ({ ...prev, type }));
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
    debounce(search.value, type, 1, pagination.limit);
  };

  const onSearchValueChange = (value) => {
    setError(null);
    setSearch((prev) => ({ ...prev, value }));
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
    debounce(value, search.type, 1, pagination.limit);
  };

  const onPaginationChange = (page, limit) => {
    setError(null);
    setPagination((prev) => ({
      ...prev,
      limit: limit || pagination.limit,
      page: page || 1,
    }));
    debounce(search.value, search.type, page || 1, limit || pagination.limit);
  };

  const debounce = (value, type, page, limit) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(async () => {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newPodcasts = await getPodcasts(value, type, page, limit);
      setPodcasts(newPodcasts?.podcasts || []);
      setError(newPodcasts?.error);
      setPagination((prev) => ({
        ...prev,
        totalPages: newPodcasts?.totalPages || 0,
      }));

      setLoading(false);
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  return { onSearchTypeChange, onSearchValueChange, onPaginationChange };
};
