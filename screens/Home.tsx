import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import navigation from '../navigation';
import { StackScreenProps } from '@react-navigation/stack';

const auth = getAuth();

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user?.email}!</Text>
      <Text style={styles.text}>This is your home page! </Text>
      <View style={styles.navBox}>
        <Button title="Courses" buttonStyle={styles.button} onPress={() => navigation.navigate('Courses')} />

      </View>

      <Button title="Sign Out" buttonStyle={styles.button} onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#fec625',
  },
  navBox: {
    padding: 10,
    
  },

});

export default HomeScreen;