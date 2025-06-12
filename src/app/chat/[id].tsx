import { FlatList, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import chatHistoryData from "../../../assets/data/chatHistory.json";
import ChatInput from "@/components/ChatInput";
import MessageListItem from "@/components/MessageListITem";
import Markdown from "react-native-markdown-display";

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
        <FlatList
          data={chat?.messages || []}
          renderItem={({ item }) => <MessageListItem messageItem={item} />}
          contentContainerStyle={{ paddingTop: 15 }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ChatInput onSend={handleSend} isLoading={false} />
    </View>
  );
}
