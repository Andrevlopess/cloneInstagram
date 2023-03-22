import React from "react";
import { Text, View, StyleSheet, Image, Pressable, Dimensions, ScrollView, SafeAreaView } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';

export function Home() {

  const windowWidth = Dimensions.get('window').width / 3;

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="lock1" size={15} color='#fff' />

            <Text style={{ color: "#fff", paddingEnd: 5 }}>andre v lopes</Text>
            <Icon name="down" size={20} color='#fff' />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name='plus' size={25} color='#fff' />
            <Icon name='bars' size={25} color='#fff' />
          </View>
        </View>
        <View style={styles.infos}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.pic} />
            <View style={styles.follow}>
              <View >
                <Text style={styles.fol}>0</Text>
                <Text style={styles.fol}>Publicações</Text>
              </View>
              <View>
                <Text style={styles.fol}>424</Text>
                <Text style={styles.fol}>Seguidores</Text>
              </View>
              <View>
                <Text style={styles.fol}>341</Text>
                <Text style={styles.fol}>Seguindo</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: '#fff' }}>andre v lopes</Text>
            <Text style={{ color: '#fff' }}>Jundiai | Sp</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Pressable style={{ backgroundColor: '#333', margin: 5, flex: 4, borderRadius: 10, padding: 5, alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>Editar</Text>
          </Pressable>
          <Pressable style={{ backgroundColor: '#333', margin: 5, flex: 4, borderRadius: 10, padding: 5, alignItems: 'center' }}>
            <Text style={{ color: '#fff' }}>Compartilhar Perfil</Text>
          </Pressable>
          <Pressable style={{ backgroundColor: '#333', margin: 5, borderRadius: 10, padding: 5, alignItems: 'center' }}>
            <Icon name="adduser" color='#fff' size={20} />
          </Pressable>
        </View>
        <View style={styles.destaquesContainer}>
          <View style={styles.destaques} />
          <View style={styles.destaques} />
          <View style={styles.destaques} />
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Array.from({ length: 15 }).map(() => {
              return (
                <View style={{ width: windowWidth, height: windowWidth, backgroundColor: '#111', borderWidth: 1, borderColor: '#fff' }} />
              )
            })}

          </View>
        </ScrollView>
      </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
  },
  header: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 200,
    height: 100,
    width: 100,
    borderColor: '#ff00d4',
    borderWidth: 2,
    backgroundColor: '#c2c2c2'
  },
  infos: {
    alignItems: 'center',
  },
  follow: {
    flexDirection: 'row',
  },
  fol: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10
  },
  destaques: {
    borderRadius: 60,
    height: 60,
    width: 60,
    backgroundColor: '#e74a4a',
    margin: 10
  },
  destaquesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});