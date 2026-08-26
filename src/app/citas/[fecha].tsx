import {View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CitasScreen() {
    const {fecha} = useLocalSearchParams<{fecha: string}>(); 
  return (
    <View>
      <Text>CitasScreen</Text>
      <Text>{fecha}</Text>
    </View>
  );
}