import React from "react";
import { Text, View, StyleSheet} from "react-native";

export default (props) => {

  return (
    <View style={styles.container}>
      <Text>New Post screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});