import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';


import  PostsList  from './src/PostsList'


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
       <PostsList></PostsList>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  searchBar: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  }
});
