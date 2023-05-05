import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, Pressable } from "react-native";
import navigation from "../navigation";

const CourseScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.courseNav}>
      <Button title="Finance" buttonStyle={styles.button} onPress={() => navigation.navigate('Course1')} />
      <Button title="Tech" buttonStyle={styles.button} onPress={() => navigation.navigate('Course2')} />
      <Button title="History" buttonStyle={styles.button} onPress={() => navigation.navigate('Course3')} />
      <Button title="Current Events" buttonStyle={styles.button} onPress={() => navigation.navigate('Course4')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#fec625',
    margin: 10,
    width: 200,
    height: 50,
  },
  courseNav: {


  },
});

export default CourseScreen;