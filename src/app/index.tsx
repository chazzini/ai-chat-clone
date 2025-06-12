import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ChatInput from "@/components/ChatInput";

const index = () => {
  const handleSend = (message) => {
    console.log("Sending: ", message);
  };
  return (
    <View className="flex-1 flex justify-center ">
      <View className="flex-1">
        <Text className="text-3xl text-bold text-green-500 dark:text-gray-100">
          Welcome to the app
        </Text>
      </View>

      <ChatInput onSend={handleSend} isLoading={false} />
      <StatusBar style="auto" />
    </View>
  );
};

export default index;
