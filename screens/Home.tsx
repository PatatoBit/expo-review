import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'

import { Modal } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

export default function Home({ navigation }: any) {
  const [modalOpen, setModalOpen] = useState(false)

  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: "Not So 'Final' Fantasy",
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ])

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={globalStyles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => {
              setModalOpen(false)
            }}
          />
          <Text>Modal</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => {
          setModalOpen(true)
        }}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}> {item.title} </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
