import React from 'react'
import { Text, View } from 'react-native'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'

import db from './config'

export default function App() {
  const collecRef = collection(db, 'Turma');
  getDocs(collecRef).then((snapshot) => {
    for (let i = 0; i < snapshot.docs.length; i++) {
      console.log('Dados[', i, ']: ', snapshot.docs[i].data()
      )
    }

  }).catch(err => {
    console.log(err.message)
  })
  return (
    <View>
      <Text>

      </Text>
    </View>
  )
}