import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator
      screenOptions={{
          headerTitle: () => <Header />,
					headerStyle: {
						backgroundColor: "#eee",
					},
					headerTintColor: "#444",
        }}
      >
        <Stack.Screen
          name="Game Home"
          component={Home}
          options={{ title: "Game Zone" }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: "Game Zone" }}
        />
      </Stack.Navigator>
  );
}
