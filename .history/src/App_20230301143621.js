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
import shop_detail from './shop_detail.json';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput style={styles.search} value="Arama" />
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
