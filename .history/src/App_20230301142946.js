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
        <Text style={styles.title}>Patika Store</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 0,
    color: 'purple',
  },
});

export default App;
