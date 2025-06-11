import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function chat() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text className="text-white">Chat id:{id}</Text>
    </View>
  );
}
