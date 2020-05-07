import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogProvider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/IndexScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "Blogs" }}
            name="Index"
            component={IndexScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;
