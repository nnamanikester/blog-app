import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as BlogProvider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";

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
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;
