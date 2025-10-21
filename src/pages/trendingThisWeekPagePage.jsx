import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getTrendingMoviesWeek} from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const TrendingThisWeekPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["this-week"],
    queryFn: getTrendingMoviesWeek,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;
 
  return (
    <PageTemplate
      title="trending"
      movies={data.results}
      action={(movie) => <AddToPlaylistIcon movie={movie} />}
    />
  );
};

export default TrendingThisWeekPage;