import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import TaskList from "./src/screens/TaskList";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <TaskList />;
  }
}
