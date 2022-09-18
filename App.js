import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/components/FormScreenComponents/Navigation";

const AppTheme = {
  colors: {
    background: "white",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
