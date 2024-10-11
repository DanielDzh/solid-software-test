import { useFonts } from "expo-font";
import { Slot } from "expo-router";

import "react-native-reanimated";

import { Layout } from "@/layout";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Layout>
      <Slot
        screenOptions={{
          headerShown: false,
        }}
      />
    </Layout>
  );
}
