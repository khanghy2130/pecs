/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          GamesList: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Collect: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Create: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          Find: {
            screens: {
              TabFourScreen: 'four',
            },
          },
          Home: {
            screens: {
              TabFiveScreen: 'five',
            },
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
