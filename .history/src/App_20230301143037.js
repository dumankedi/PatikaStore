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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'purple',
  },
});

export default App;
