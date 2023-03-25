import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Avatar, Box, Button, Center, FormControl, HStack, Image, Input, Modal, Square, VStack } from 'native-base'
import { SafeAreaView } from "react-native-safe-area-context";
// import {SafeAreaView} from 'react-native'

export default (props) => {
  const windowWidth = Dimensions.get('window').width / 3;
  const windowHeight = Dimensions.get('window').height
  const [showModal, setShowModal] = useState(false);

  return (


    <SafeAreaView >
      <VStack pt={10} >
          <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          endFillColor='#000'
          fadingEdgeLength={3}
          alwaysBounceHorizontal
          snapToAlignment="center"
          scrollEnabled='false'>
        <HStack space={3}>
          {Array.from({ length: 10 }).map((index) => {
            return <Avatar size='lg' />
          })}
        </HStack>
      </ScrollView>
      </VStack>
    
    </SafeAreaView>


  )
}

