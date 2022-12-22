import { Text, View, StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';

export default function GamesListScreen({ navigation }: RootTabScreenProps<'GamesList'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 1 (colored)</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
