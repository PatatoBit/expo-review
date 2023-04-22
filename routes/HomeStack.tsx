import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ImageBackground } from 'react-native'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({

        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTintColor: '#444',
      })}

      // screenOptions={{
      // 		headerStyle: {
      // 			backgroundColor: "#eee",
      // 		},
      // 		headerTintColor: "#444",
      //   }}
    >
      <Stack.Screen
        name="Game Home"
        component={Home}
        options={({navigation}) => ({
          title: 'Game Zone',
          headerTitle: () => <Header navigation={navigation} title="GameZone" />,

          headerBackground: () => (
            <ImageBackground
              source={require('../assets/game_bg.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  )
}
