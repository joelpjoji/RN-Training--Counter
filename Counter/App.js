/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={styles.Counter}>{count}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 50,
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setCount(count - 1);
          }}>
          <Text style={styles.ButtonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.Button1}
        onPress={() => {
          setCount(0);
        }}>
        <Text style={styles.ButtonText1}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Counter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 60,
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    marginStart: 175,
    marginTop: 250,
  },
  Button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  ButtonText: {
    textAlign: 'center',
    width: 60,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  Button1: {
    alignItems: 'center', //Centered vertically
    elevation: 8,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 30,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 12,
  },
  ButtonText1: {
    width: 60,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default App;
