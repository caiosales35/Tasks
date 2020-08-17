import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import Auth from "./src/screens/Auth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Auth />;
  }
}
