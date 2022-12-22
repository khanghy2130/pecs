import { Alert, Platform } from "react-native";

// polyfill for web
const alertPolyfill: typeof Alert.alert = (title, description, options, extra) => {
    window.confirm([title, description].filter(Boolean).join('\n'));
}
  
export default Platform.OS === 'web' ? alertPolyfill : Alert.alert;