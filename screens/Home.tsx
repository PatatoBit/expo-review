import { StyleSheet, View, Text, Button } from "react-native"

import { globalStyles } from "../styles/global"

export default function Home({navigation}: any) {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>
				Home Screen
			</Text>
			<Button
        title="Go to Details"
        onPress={() => navigation.navigate('ReviewDetails')}
      />
		</View>
	)
}

