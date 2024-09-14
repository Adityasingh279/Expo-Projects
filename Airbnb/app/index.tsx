// import { router } from "expo-router";
// import { Text, View, Pressable } from "react-native";
// import explore from "./tabs/explore";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <Redirect href="./(tabs)/exploretabs" />
    // <View className="flex-1 justify-center items-center">
    //   <Pressable onPress={() => router.push("./explore/explore")}>
    //     <Text className="text-red-900">
    //       Edit app/index.tsx to edit this screen.
    //     </Text>
    //   </Pressable>
    // </View>
  );
}
