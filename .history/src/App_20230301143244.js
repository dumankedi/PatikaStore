import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Flatlist,
  TextInput,
  StyleSheet,
} from 'react-native';
import shop_detail from './shop_detail.json';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput style={styles.search} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'purple',
    marginTop: 20,
  },
  search: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default App;
