const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RmNzM2ZGMyZDc2Mjg2NmE3Mzg0OTBiMDFlNjkxZiIsIm5iZiI6MTcyMjQ4NzQzNy43MDEzNjMsInN1YiI6IjY2YTcyYWZiMDg1MDYzZTg3YTU2YmY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vD2rVzJYGzJU8HDcOgCm2sEFez2B7fd6qa1X7pRC3cE";
export const fetchWatchlistMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/account/21410408/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + apiKey,
    },
  };

  const res = await fetch(url, options);
  // console.log(res.ok);
  if (!res.ok) {
    throw new Error("Failed to update watchlist");
  }

  const json = await res.json();
  return json.results;
};

export const addMovieToWatchlist = async (movieId: number) => {
  const url = "https://api.themoviedb.org/3/account/21410408/watchlist";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      watchlist: true,
    }),
  };

  const res = await fetch(url, options);
  // console.log(res.ok);
  if (!res.ok) {
    throw new Error("Failed to update watchlist");
  }

  const json = await res.json();
  return json;
};
