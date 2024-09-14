import { View, Text, ActivityIndicator, Image, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { fetchMovie } from "./api/movies";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { addMovieToWatchlist } from "./api/watchlist";
import { createIconSetFromFontello } from "@expo/vector-icons";

interface Movie {
  id: number;
  title: string;
  description: string;
  backdrop_path: string;
  overview: string;
}

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const client = useQueryClient();

  const onsubmit = () => {
    mutate();
    console.warn("Added to Watchlist");
  };

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery<Movie, Error>({
    queryKey: ["movies", id], //try query are not over-writing in cache the same calling key data
    queryFn: () => fetchMovie(id),
    // Prevent fetching again if the id hasn't changed
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const { mutate } = useMutation<Movie, Error>({
    mutationFn: () => addMovieToWatchlist(Number(id)),
    onSuccess: () => {
      client.invalidateQueries(["watchlist"]);
    },
    onError: (error) => {
      alert(`Error adding movie to watchlist: ${error.message}`);
    },
  });

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error loading movie details: {error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen options={{ title: movie?.title }} />
      <Image
        source={{
          uri: "https://image.tmdb.org/t/p/w500" + movie?.backdrop_path,
        }}
        style={{ width: "100%", height: 300 }}
      />
      <View
        style={{
          padding: 10,
          // justifyContent: "center", alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>{movie?.title}</Text>
        <View style={{ marginVertical: 10 }}>
          <Pressable
            onPress={onsubmit}
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <FontAwesome
              name="bookmark-o"
              size={24}
              color={"black"}
              style={{}}
            />
            <Text>Add to Watchlist</Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>
          {movie?.overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieDetails;
