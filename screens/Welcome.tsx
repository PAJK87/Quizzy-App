import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { StackScreenProps } from "@react-navigation/stack";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>

      <View style={styles.buttons}>
        <Button title="Sign in" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')} />
        <Button title="Sign up" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign Up')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
  },
  button: {
    marginTop: 10
  },
});
export default WelcomeScreen;