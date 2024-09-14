import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Pressable
        className="items-center justify-center"
        onPress={() => {
          router.push("../home");
        }}
        onPressIn={() => console.warn("premss in")}
        onLongPress={() => console.warn("lomg press")}
        onPressOut={() => console.warn("premss out")}
      >
        <Ionicons name="logo-facebook" size={50} color={"0f0fff"} />
        <Text className="text-red-500">index</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
