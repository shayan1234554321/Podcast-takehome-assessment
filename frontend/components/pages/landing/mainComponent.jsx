"use client";
import React, { useEffect, useState } from "react";
import "./mainComponent.css";
import { getPodcasts } from "@/utility/serverFunctions";
import { handleValueChanges } from "@/hooks/landingPageHelper";
import Search from "@/components/helper/Search";
import Loading from "@/components/helper/Loading";
import Podcast from "@/components/helper/Podcast";
import PaginationComponent from "@/components/helper/PaginationComponent";

const MainComponent = () => {
  const [search, setSearch] = useState({
    value: "",
    type: "search",
  });
  const [error, setError] = useState("");
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: "9",
    totalPages: 0,
  });
  const [timeoutId, setTimeoutId] = useState(null);
  const { onSearchTypeChange, onSearchValueChange, onPaginationChange } =
    handleValueChanges(
      setSearch,
      setPagination,
      search,
      pagination,
      timeoutId,
      setTimeoutId,
      setPodcasts,
      setLoading,
      setError
    );

  useEffect(() => {
    (async () => {
      const newPodcasts = await getPodcasts("", "all", 1, 9);
      setPodcasts(newPodcasts.podcasts);
      setError(newPodcasts.error);
      setPagination((prev) => ({
        ...pagination,
        totalPages: newPodcasts.totalPages,
      }));
      setLoading(false);
    })();
  }, []);

  return (
    <div className="main">
      <Search
        search={search}
        onSearchTypeChange={onSearchTypeChange}
        onSearchValueChange={onSearchValueChange}
        error={error}
      />
      <h5 style={{ color: error ? "red" : "white" }}>
        {error ? error : "Podcasts"}
      </h5>
      <div className="podcastsContainer">
        {loading ? (
          <Loading />
        ) : podcasts?.length > 0 ? (
          podcasts.map((podcast) => (
            <Podcast key={podcast.title + podcast.category} podcast={podcast} />
          ))
        ) : (
          <div className="notFound">
            <h3>No Podcast Found</h3>
            <img src="/not-found.png" alt="" />
          </div>
        )}
      </div>
      {podcasts?.length > 0 && (
        <PaginationComponent
          pagination={pagination}
          onPaginationChange={onPaginationChange}
        />
      )}
      <h5>This is a Take home assessment website for Interview by Shayan</h5>
    </div>
  );
};

export default MainComponent;
