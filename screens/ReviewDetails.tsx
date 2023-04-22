import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/Card'

export default function ReviewDetails({ route, navigation }: any) {
    const rating: string = route.params.rating

    console.log(rating)

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image
                        source={
                            images.ratings[
                                rating as keyof typeof images.ratings
                            ]
                        }
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {},
})
