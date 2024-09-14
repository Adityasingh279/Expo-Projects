import { Tabs } from "expo-router";
import { Image, Dimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="exploretabs"
        options={{
          title: "Explore",
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          title: "Wishlists",
          tabBarIcon: ({ color }) => (
            <AntDesign size={25} name="hearto" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/airbnb.png")}
              style={{
                height: height * 0.03,
                width: width * 0.07,
                objectFit: "contain",
              }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/inbox.png")}
              style={{
                height: height * 0.03,
                width: width * 0.07,
                objectFit: "contain",
              }}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/icons/user.png")}
              style={{
                height: height * 0.03,
                width: width * 0.07,
                objectFit: "contain",
              }}
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
