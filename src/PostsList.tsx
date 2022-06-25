import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import Item from '../src/Item';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector, Provider } from 'react-redux'
import store from '../redux/store';
import { RootState } from '../redux/reducers';
import { SetList, SetKeyword } from '../redux/actions';

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.postsReducer.posts)
  const keyword = useSelector((state: RootState) => state.postsReducer.keyword)

  const setKeyword = (text: string) => {
    dispatch(SetKeyword(text))
}

  const fetchData = async () => {
    await fetch(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
    .then(res => res.json())
    .then(data => data.hits)
    .then(data => dispatch(SetList(data)))
    .then(data => console.log(data));
  }
  
  return (
    <Provider store={store}>
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
          {posts?.map((item: any) =>
            <Item key={item.objectID} identifier={item.objectID} author={item.author} title={item.title} url={item.url}></Item> 
          )}
        </ScrollView>
        <StatusBar style="auto" />
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
