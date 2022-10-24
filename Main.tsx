import React from "react";
import { View } from "react-native";
import Button from "./components/Button";

import { useNavigation } from "@react-navigation/native";
import { MainNavigatorGenericProp } from "./App";

const Main: React.FC = () => {
  const { navigate } =
    useNavigation<
      MainNavigatorGenericProp<
        | "intro"
        | "panGestureHandler"
        | "interpolateScrollView"
        | "switchTheme"
        | "pinchGestureHandler"
        | "instagramDoubleTap"
        | "customScrollView"
      >
    >();

  const onButtonPress = (title: any) => {
    navigate(title);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Button title="1. Intro" onPress={() => onButtonPress("intro")} />
      <Button
        title="2. Pan Gesture Handler"
        onPress={() => onButtonPress("panGestureHandler")}
      />
      <Button
        title="3. Interpolate ScrollView"
        onPress={() => onButtonPress("interpolateScrollView")}
      />
      <Button
        title="4. Switch Theme"
        onPress={() => onButtonPress("switchTheme")}
      />
      <Button
        title="5. Pinch Gesture Handler"
        onPress={() => onButtonPress("pinchGestureHandler")}
      />
      <Button
        title="6. Instagram Double Tap"
        onPress={() => onButtonPress("instagramDoubleTap")}
      />
      <Button
        title="7. Custom Scroll View"
        onPress={() => onButtonPress("customScrollView")}
      />
    </View>
  );
};

export default Main;
