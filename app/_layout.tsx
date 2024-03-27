import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Header from "./screens/Home/Header";
import { useDatabaseInitializer } from "./modules/database/sqlLiteDatabaseInitializer";

// import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  const [loadedDataBase, errorDataBase] = useDatabaseInitializer();

  useEffect(() => {
    if (error) throw error;
    if (errorDataBase) throw errorDataBase;
  }, [error, errorDataBase]);

  useEffect(() => {
    if (loaded && loadedDataBase) {
      SplashScreen.hideAsync();
    }
  }, [loaded, loadedDataBase]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={{
        dark: false,
        colors: {
          primary: "",
          background: "",
          card: "",
          text: "",
          border: "",
          notification: "",
        },
      }}
    >
      <Stack
        initialRouteName="index"
        screenOptions={{
          header(props) {
            return <Header />;
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "transparentModal",
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
