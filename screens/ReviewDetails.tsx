import { StyleSheet, View, Text } from "react-native"
import { globalStyles } from "../styles/global"

export default function ReviewDetails({route, navigation}: any) {

	return (
		<View style={globalStyles.container}>
			<Text>
				{route.params.title}
			</Text>
			<Text>
				{route.params.body}
			</Text>
			<Text>
				{route.params.rating}
			</Text>
		</View>
	)
}