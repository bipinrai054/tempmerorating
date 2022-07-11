import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.h1}>Welcome!</Text>
        <Text style={styles.h3}>Please sign in your account</Text>
      </View>

      <TextInput
        style={styles.input}
        type="text"
        placeholder="Email Address "
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home');
        }}
        style={{
          marginTop: 20,
          width: '80%',
          backgroundColor: '#191d20',
          color: 'white',
          padding: 20,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    marginBottom: 40,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'light',
  },
  input: {
    // marginTop: 20,
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    padding: 10,
  },
});
