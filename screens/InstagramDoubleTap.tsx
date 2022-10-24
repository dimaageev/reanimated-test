import React, { useCallback, useRef } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface Props {}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const InstagramDoubleTap: React.FC<Props> = () => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(350, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, (isFinished) => {
      if (isFinished) {
        opacity.value = withDelay(350, withTiming(1));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}> */}
      <TapGestureHandler
        maxDelayMs={250}
        ref={doubleTapRef}
        numberOfTaps={2}
        onActivated={onDoubleTap} //
      >
        <Animated.View>
          <ImageBackground
            source={require("../assets/instagram/image.jpeg")}
            style={styles.image}
          >
            <AnimatedImage
              source={require("../assets/instagram/heart.png")}
              style={[
                styles.image,
                {
                  shadowOffset: { width: 0, height: 20 },
                  shadowOpacity: 0.3,
                  shadowRadius: 35,
                },
                rStyle,
              ]}
              resizeMode={"center"}
            />
          </ImageBackground>
          <Animated.Text style={[styles.trains, rTextStyle]}>
            {" "}
            🚊 🚊 🚊 🚊{" "}
          </Animated.Text>
        </Animated.View>
      </TapGestureHandler>
      {/* </TapGestureHandler> */}
    </View>
  );
};

const { width: SIZE } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  trains: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
});

export default InstagramDoubleTap;
