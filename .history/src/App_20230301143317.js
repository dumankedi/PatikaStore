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
    width: Dimensions.get('window').width,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default App;
