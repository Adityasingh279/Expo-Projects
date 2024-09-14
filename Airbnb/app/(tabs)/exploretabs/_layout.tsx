import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Omg from "./Omg";
import Beaches from "./Beaches";
import Tinyhomes from "./Tinyhomes";
import Golfing from "./Golfing";

const Tab = createMaterialTopTabNavigator();

export default function RootLayout() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View className="px-5 mt-12 ">
        <View className="flex-row items-center justify-between border rounded-full border-gray100 bg-white py-2 px-3">
          <TextInput
            className="flex-1 p-2 z-1"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {!isFocused && (
            <View className="absolute px-5 z-0">
              <Feather name="search" size={25} />
            </View>
          )}

          {!isFocused && (
            <View className="absolute left-16 z-0">
              <Text className="text-14px font-semibold text-inknormal">
                Where to?
              </Text>
              <Text className="text-inkstandard font-thin text-12px leading-16.8">
                Anywhere . Any week . Add guests
              </Text>
            </View>
          )}

          <Pressable className="border rounded-full border-gray75 w-10 h-10 justify-center items-center">
            <Image
              source={require("../../../assets/icons/filter.png")}
              style={{ height: height * 0.025, width: width * 0.05 }}
            />
          </Pressable>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f0f0f0" },
          tabBarIndicatorStyle: { backgroundColor: "black" },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="OMG!"
          component={Omg}
          options={{
            title: "OMG!",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("../../../assets/icons/ufo.png")}
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
        <Tab.Screen
          name="Beaches"
          component={Beaches}
          options={{
            title: "Beaches",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("../../../assets/icons/beach.png")}
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
        <Tab.Screen
          name="Tinyhomes"
          component={Tinyhomes}
          options={{
            title: "Tiny homes",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("../../../assets/icons/tinyhomes.png")}
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
        <Tab.Screen
          name="Golfing"
          component={Golfing}
          options={{
            title: "Golfing",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("../../../assets/icons/golf.png")}
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
      </Tab.Navigator>
    </>
  );
}
