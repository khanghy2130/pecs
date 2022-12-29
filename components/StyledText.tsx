import { Text  } from 'react-native';
import Colors from '../constants/Colors';

export function StyledText(props: Text["props"]) {
  return <Text {...props} style={
    [props.style, { fontFamily: 'lgc-normal', color: Colors.text }]
  } />;
}

export function StyledTextLight(props: Text["props"]) {
  return <Text {...props} style={
    [props.style, { fontFamily: 'lgc-light', color: Colors.text }]
  } />;
}