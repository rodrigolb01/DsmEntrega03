import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Item from './src/Item';
import SearchIcon from '@mui/icons-material/Search';

export default function App() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  const onKeywordChange = (event : any) => {
    setKeyword(event.target.value)
  }

  const fetchData = async () => {
    await fetch(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
    .then(res => res.json())
    .then(data => data.hits)
    .then(setList);
  }
  
  return (
    <View style={styles.container}>
      <h3>News</h3>
      <View style={styles.searchBar}>
       <input type={'text'} value={keyword} onChange={onKeywordChange}></input>
       <SearchIcon></SearchIcon>
      </View>
      <Button disabled={keyword === '' || keyword === undefined ? true : false} title='Search' onPress={fetchData}></Button>
      <div>
        {list?.map((item: any) => 
          <Item key={item.objectID} author={item.author} title={item.title} url={item.url}></Item>
        )}
      </div>
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
