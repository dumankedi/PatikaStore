import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import shop_detail from './shop_detail.json';
import ShopCard from './components/Cards/Card.js';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput style={styles.search} value="Ara..." />
        <FlatList
          numColumns={2}
          data={shop_detail}
          renderItem={({item}) => <ShopCard shop={item} />}
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
