import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import MovieListItem from "@/components/MovieListItem";
import { fetchWatchlistMovies } from "../api/watchlist";

export default function TabOneScreen() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["watchlist"],
    queryFn: fetchWatchlistMovies,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Watchlist</Text>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        // keyExtractor={(item) => item.id.toString()} // Provide a unique key for each item
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
