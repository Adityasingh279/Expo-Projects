const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RmNzM2ZGMyZDc2Mjg2NmE3Mzg0OTBiMDFlNjkxZiIsIm5iZiI6MTcyMjMzNTQxMi4yOTExOTgsInN1YiI6IjY2YTcyYWZiMDg1MDYzZTg3YTU2YmY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tFEN3zzOCE-XCSyaEU_qC8TmtcvLkawiWUb9O6nClog";

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + apiKey,
};

export const fetchTopRatedMovies = async ({ pageParam }:{pageParam:number}) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
  const options = {
    method: "GET",
    headers,
  };

  // try {
  //   const response = await fetch(url, options);
  //   const json = await response.json();
  //   // console.log(json);
  //   // console.log(JSON.stringify(json,null,2)); //to print data in a structured manner
  //   return json.results;
  // } catch (err) {
  //   console.error("error:" + err);
  // }
  //   //   fetch(url, options)
  //   //     .then((res) => res.json())
  //   //     .then((json) => console.log(json))
  //   //     .catch((err) => console.error("error:" + err));

  const res = await fetch(url, options);
  // console.log(res.ok);
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const json = await res.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=238&language=en-US`;
  const options = {
    method: "GET",
    headers,
  };

  const res = await fetch(url, options);
  // console.log(res.ok);
  if (!res.ok) {
    throw new Error("Failed to fetch movie Details");
  }

  const json = await res.json();
  return json;
};
