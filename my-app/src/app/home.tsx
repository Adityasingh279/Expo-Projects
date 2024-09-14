import React from "react";
import {
  Text,
  View,
  Pressable,
  Dimensions,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
// import { router } from "expo-router";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
// import { Route } from "expo-router/build/Route";
// const { height, width } = Dimensions.get("screen");
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface data {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  full_name: z.string().min(3, "full name must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const { control, handleSubmit } = useForm({
  defaultValues: {
    email: "",
    // full_name: "",
    password: "",
  },
  resolver: zodResolver(formSchema),
});

const onSubmit = (data: data) => {
  Alert.alert("Successful", JSON.stringify(data));
};

export default function Home() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="flex-1 bg-freakyblue">
      <View className="flex-3 pt-20">
        <Text className="text-4xl font-bold text-white px-10 py-14 font-pacificoRegular">
          WELCOME
        </Text>
      </View>

      <View className="flex-7 bg-white px-10 rounded-t-[50px] absolute bottom-0 w-full pb-14 ">
        <Text className="py-6 text-3xl font-pacificoRegular">Login</Text>

        <View className="mb-10">
          <Controller
            control={control}
            name={"email"}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  placeholder="Email"
                  className="border-b py-4 mb-6 font-pacificoRegular"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="color-red-500">{error.message}</Text>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name={"password"}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  placeholder="Password"
                  blurOnSubmit
                  secureTextEntry
                  className="border-b py-4 font-pacificoRegular"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {error && (
                  <Text className="color-red-500">{error.message}</Text>
                )}
              </>
            )}
          />
        </View>

        <View className="items-center">
          <Pressable
            className="items-center bg-freakybluee py-3 border-4 rounded-full w-3/4 "
            // onPress={router.push()}
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-xl text-white font-pacificoRegular">
              Login
            </Text>
          </Pressable>
        </View>

        <View className="flex-row gap-5 font-bold px-9 py-9 items-center justify-center">
          <Pressable>
            <Text className="font-semibold text-lg font-pacificoRegular">
              Create an account?
            </Text>
          </Pressable>

          <Pressable>
            <Text className="font-semibold text-xl font-pacificoRegular">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
