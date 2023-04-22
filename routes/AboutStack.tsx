import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createNativeStackNavigator()

export default function AboutStack() {
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
          name="About"
          component={About}
        />
      </Stack.Navigator>
	)
}