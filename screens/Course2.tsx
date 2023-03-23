import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import navigation from "../navigation";

const Course2: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>


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
  },

});

export default Course2;