import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import navigation from "../navigation";

const CourseScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Course Screen</Text>
      <View style={styles.courseNav}>
        <Pressable onPress={() => navigation.navigate('Course1')}>
          <Text>Course 1</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Course2')}>
          <Text>Course 2</Text>
        </Pressable>

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
  courseNav: {


  },
});

export default CourseScreen;