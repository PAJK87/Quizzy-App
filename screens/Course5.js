import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import navigation from "../navigation";

const Course2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finance</Text>
      <Text style={styles.subtitle}> Welcome to the finance quiz!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  subtitle:{
    fontSize: 20,
  }

});

export default Course2;