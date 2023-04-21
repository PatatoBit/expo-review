import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
			<Stack.Navigator
			screenOptions={
					{
					headerStyle: {backgroundColor: "#eee"}
				}
			}>
				<Stack.Screen name="Home" component={Home} options={ {title: "Game Zone"}} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={ {title: "Game Zone", }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
