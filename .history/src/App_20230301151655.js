/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Flatlist,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import news_data from './shop_detail.json';
import NewsCard from './components/Cards/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput style={styles.search} value="Ara..." />
        <Flatlist
          keyExtractor={item => item.id.toString()}
          data={news_data}
          renderItem={({item}) => <NewsCard haber={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: 'purple',
    marginTop: 20,
  },
  search: {
    height: 40,
    width: Dimensions.get('window').width / 1.1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default App;
