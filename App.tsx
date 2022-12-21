import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constants/Colors';

import "./firebase";
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{backgroundColor: Colors.background}}>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
