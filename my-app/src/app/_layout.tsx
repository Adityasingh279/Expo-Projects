import { Slot, Stack } from "expo-router";
import "../global.css";

export default function HomeLayout() {
  <Stack>
    <Stack.Screen name="home" />
  </Stack>;
  return <Slot />;
}
