import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import chatHistoryData from "../../../assets/data/chatHistory.json";
import ChatInput from "@/components/ChatInput";

export default function chat() {
  const { id } = useLocalSearchParams();

  const chat = chatHistoryData.find((items) => items.id === id);

  const handleSend = (message: string) => {
    console.log("Sending:", message);
  };

  if (!chat) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-white">Chat not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Text className="text-white">Chat id:{chat.title}</Text>
      </View>
      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
