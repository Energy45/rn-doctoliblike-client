import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './components/RegisterForm';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>AH</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NativeBaseProvider>
      <RegisterForm/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
