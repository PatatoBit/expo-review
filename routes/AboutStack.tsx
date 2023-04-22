import { createNativeStackNavigator } from '@react-navigation/native-stack'

import About from '../screens/About'
import Header from '../shared/Header'

const Stack = createNativeStackNavigator()

export default function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} />,
                headerStyle: {
                    backgroundColor: '#eee',
                },
                headerTintColor: '#444',
            })}
        >
            <Stack.Screen name="About Us" component={About} />
        </Stack.Navigator>
    )
}
