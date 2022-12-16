/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';

import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import GamesListScreen from '../screens/GamesListScreen';
import CollectScreen from '../screens/CollectScreen';
import CreateScreen from '../screens/CreateScreen';
import FindScreen from '../screens/FindScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitle(props) {
        return null;
      },
      headerTintColor: Colors.activeTint,
      headerStyle: {
        backgroundColor: Colors.inactiveTint
      }
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Page not found!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="GamesList"
      screenOptions={{
        tabBarActiveTintColor: Colors.inactiveTint,
        tabBarActiveBackgroundColor: Colors.activeTint,
        tabBarInactiveTintColor: Colors.activeTint,
        tabBarInactiveBackgroundColor: Colors.inactiveTint,
        tabBarStyle: { height: 60 },
        tabBarShowLabel: false,
        
        headerTitle(props) {
          return null;
        },
        headerStyle: {
          backgroundColor: Colors.inactiveTint
        }
      }}>
      <BottomTab.Screen
        name="GamesList"
        component={GamesListScreen}
        options={({ navigation }: RootTabScreenProps<'GamesList'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="play" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.push('Modal', {ID: 0});
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors.activeTint}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Collect"
        component={CollectScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} {...props} />;
}
