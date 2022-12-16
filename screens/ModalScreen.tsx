import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button } from 'react-native';

import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';

export default function ModalScreen({navigation, route}: RootStackScreenProps<"Modal">) {
  const nextID = Math.floor(Math.random()*100);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal {route.params? route.params["ID"]: null}</Text>
      <View style={styles.separator}/>
      <Button
        title= {"GO TO " + nextID}
        onPress={() => {
          navigation.push('Modal', {
            ID: nextID
          });
        }}
      />
      <StatusBar style={"light"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
