// import { Text, View, TextInput } from "react-native";
// import { useState } from "react";

// export default function Index() {
//   const [user, setUser] = useState<User>({
//     name: "Shivam",
//     city: "Gorakhpur",
//     age: 24,
//   });

//   type User = {
//     name: string;
//     city: string;
//     age: number;
//   };

//   const handleChange = (text: string) =>
//     setTimeout(() => {
//       setUser((prevUser) => ({ ...prevUser, name: text }));
//     }, 5000);
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>{user.name}</Text>
//       <Text>{user.city}</Text>
//       <Text>{user.age}</Text>
//       <TextInput onChangeText={handleChange} placeholder="Enter name to change" />
//     </View>
//   );
// }

import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [name, setName] = useState<String>("");
  const [user, setUser] = useState<User>({
    name: "Shivam",
    city: "Gorakhpur",
    age: 24,
  });

  type User = {
    name: string;
    city: string;
    age: number;
  };

  const handleChange = (text: string) => setName(text);
  const updateName = () => {
    if (name?.trim() !== "") {
      setUser((prevUser) => ({ ...prevUser, name: name?.trim() }));
    }
    setName("");
  };
  return (
    <SafeAreaView>
      <View className="justify-center items-center">
        <Text>{user.name}</Text>
        <Text>{user.city}</Text>
        <Text>{user.age}</Text>
        <TextInput
          onChangeText={handleChange}
          placeholder="Enter name to change"
          style={{ borderWidth: 1, padding: 10, width: "80%", marginTop: 10 }}
        />
        <Pressable
          onPress={updateName}
          className=" px-5 py-5 border border-black bg-red-500 mt-5"
        >
          <Text>Update Name</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
