import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigation from "./src/components/FormScreenComponents/Navigation";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
