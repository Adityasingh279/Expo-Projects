import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
// import EditScreenInfo from "@/components/EditScreenInfo";
// import { useEffect, useState } from "react";
import { fetchTopRatedMovies } from "../api/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";

// interface movie {
//   id: number;
//   title: string;
//   setMovies: string;
//   movies: string;
// }

// interface Error {
//   message: string;
// }

// const colors = [ //for activity indicator color but it doesn't support array of colors
//   "#FF0000",
//   "#FFA500",
//   "#FFFF00",
//   "#008000",
//   "#0000FF",
//   "#4B0082",
//   "#9400D3",
// ];

export default function TabOneScreen() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: fetchTopRatedMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
  // const [movies, setMovies] = useState<movie[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<Error | undefined>(undefined);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setIsLoading(true);

  //     try {
  //       const movies: movie[] = await fetchTopRatedMovies();
  //       // console.log(movies);
  //       setMovies(movies);
  //     } catch (error) {
  //         setError({ message: "An unknown error occurred." });
  //     }

  //     setIsLoading(false);
  //   };
  //   // fetchTopRatedMovies();
  //   fetchMovies();
  // }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }
  // console.log(data);
  const movies = data?.pages?.flat();

  return (
    <View style={styles.container}>
      <Text>Movies</Text>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        keyExtractor={(item) => item.id.toString()} // Provide a unique key for each item
        renderItem={({ item }) => (
          // <View>
          //   <Text>{item.title}</Text>
          // </View>

          <MovieListItem movie={item} />
        )}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
