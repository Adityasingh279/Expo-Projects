import { Pressable, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";

interface Movie {
  title: string;
  poster_path: string;
  id: number;
}

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <Link href={`/${movie.id}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
          }}
          style={{ width: "100%", aspectRatio: 3 / 5, borderRadius: 15 }}
        />
        {/* <Text>{movie.title}</Text> */}
      </Pressable>
    </Link>
  );
};

export default MovieListItem;
