import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#6495ed`,
    borderRadius: 15,
    marginVertical: 10,
  },
  text: {
    color: "white",
  },
});

export default Button;
