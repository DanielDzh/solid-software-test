import { useFonts } from "expo-font";
import { Slot } from "expo-router";

import "react-native-reanimated";

import { Layout } from "@/layout";
import AppProviders from "@/providers/AppProviders";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AppProviders>
      <Layout>
        <Slot
          screenOptions={{
            headerShown: false,
          }}
        />
      </Layout>
    </AppProviders>
  );
}
