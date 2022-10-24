import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

interface Props {
  index: number;
  title: string;
  translateX: Animated.SharedValue<number>;
}

const { width: PAGE_WIDTH } = Dimensions.get("window");

const ScrollViewPage: React.FC<Props> = ({ index, title, translateX }) => {
  const pageOffset = PAGE_WIDTH * index;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value + pageOffset }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`,
          alignItems: "center",
          justifyContent: "center",
        },
        rStyle,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
});

export { PAGE_WIDTH };
export default ScrollViewPage;
