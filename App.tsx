import React from "react";
import Main from "./Main";
import Intro from "./screens/Intro";
import PanGestureHandle from "./screens/PanGestureHandler";
import InterpolateScrollView from "./screens/InterpolateScrollView";
import SwitchTheme from "./screens/SwitchTheme";
import PinchGestureHandle from "./screens/PinchGestureHandler";
import InstagramDoubleTap from "./screens/InstagramDoubleTap";
import CustomScrollView from "./screens/CustomScrollView";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

type RoutesList = {
  main: undefined;
  intro: undefined;
  panGestureHandler: undefined;
  interpolateScrollView: undefined;
  switchTheme: undefined;
  pinchGestureHandler: undefined;
  instagramDoubleTap: undefined;
  customScrollView: undefined;
};

export type MainNavigatorGenericProp<T extends keyof RoutesList & string> =
  NativeStackNavigationProp<RoutesList, T>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            headerTitle: "Welcome Reanimated 2 ",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="intro"
          component={Intro}
          options={{ headerTitle: "Intro", headerTransparent: true }}
        />
        <Stack.Screen
          name="panGestureHandler"
          component={PanGestureHandle}
          options={{
            headerTitle: "Pan Gesture Handler",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="interpolateScrollView"
          component={InterpolateScrollView}
          options={{
            headerTitle: "Interpolate ScrollView",
            headerTintColor: "white",

            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="switchTheme"
          component={SwitchTheme}
          options={{
            headerTitle: "Theme Switch",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="pinchGestureHandler"
          component={PinchGestureHandle}
          options={{
            headerTitle: "Pinch Gesture Handler",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="instagramDoubleTap"
          component={InstagramDoubleTap}
          options={{
            headerTitle: "Instagram Double Tap",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="customScrollView"
          component={CustomScrollView}
          options={{
            headerTitle: "Custom Scroll View",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
