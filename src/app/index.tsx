import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className="flex-1 flex justify-center items-center">
      <Text className="text-3xl text-bold text-green-500 dark:text-gray-100">
        Welcome to the app
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
