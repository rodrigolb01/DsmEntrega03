import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import Item from './src/Item';
import { Icon } from 'react-native-elements';

export default function App() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchData = async () => {
    await fetch(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
    .then(res => res.json())
    .then(data => data.hits)
    .then(setList);
  }
  
  return (
    <View style={styles.container}>
      <Text>News</Text>
      <View style={styles.searchBar}>
       <TextInput value={keyword} onChangeText={text => setKeyword(text)} placeholder="search keyword"></TextInput>
       <Icon
        tvParallaxProperties={""}
        name='search'
        type='ionicon'
        color='#517fa4'
      />
      </View>
      <Button disabled={keyword === '' || keyword === undefined ? true : false} title='Search' onPress={fetchData}></Button>
      <ScrollView>
        {list?.map((item: any) => 
          <Item key={item.objectID} author={item.author} title={item.title} url={item.url}></Item>
        )}
      </ScrollView>
      <StatusBar style="auto" />
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
  searchBar: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  }
});
