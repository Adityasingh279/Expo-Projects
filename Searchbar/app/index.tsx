import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Index: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        // console.log("Response Data", data);
        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const handleClearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <View className="flex-1 px-5">
      <View className=" bg-#ddd border rounded flex-row items-center">
        <TextInput
          className="flex-1 h-20"
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <Entypo
          name="cross"
          size={24}
          color="black"
          className="px-4"
          onPress={handleClearSearchQuery}
        />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="items-center mb-10 bg-#f9f9f9 font-semibold rounded">
            <Image
              source={{ uri: item.image }}
              className="h-80 w-full"
              resizeMode="contain"
            />
            <Text className="font-18 font-bold">{item.title}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Index;
