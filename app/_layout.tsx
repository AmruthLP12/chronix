import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { useColorScheme as useNativeWindColorScheme } from "nativewind";

import "../styles/global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { setColorScheme } = useNativeWindColorScheme();

  useEffect(() => {
    if (colorScheme) {
      setColorScheme(colorScheme);
    }
  }, [colorScheme]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            title: "About Chronix",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "#0B0F19" : "#FFFFFF",
            },
            headerTitleStyle: {
              color: colorScheme === "dark" ? "#FFFFFF" : "#1E293B",
              fontWeight: "900",
            },
            headerTintColor: colorScheme === "dark" ? "#FFFFFF" : "#1E293B",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="age" options={{ headerShown: false }} />
        <Stack.Screen name="time" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
