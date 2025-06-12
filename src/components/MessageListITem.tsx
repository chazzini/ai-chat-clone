import { View, Text } from "react-native";
import React from "react";
import Markdown from "react-native-markdown-display";

const MessageListItem = ({ messageItem }) => {
  const { role, message } = messageItem;
  const isUser = role === "user";

  const markdownStyles = {
    body: {
      color: "white",
    },
    code_inline: {
      backgroundColor: "#1e1e1e",
      color: "white",
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      lineHeight: 20,
    },
    code_block: {
      backgroundColor: "#1e1e1e",
      color: "white",
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      lineHeight: 20,
    },
    fence: {
      backgroundColor: "#1e1e1e",
      color: "white",
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      lineHeight: 20,
    },
    blockquote: {
      backgroundColor: "#2d2d2d",
      borderLeftColor: "#4d4d4d",
      borderLeftWidth: 4,
      paddingLeft: 16,
      paddingVertical: 8,
      marginVertical: 8,
    },
    bullet_list: {
      marginVertical: 8,
    },
    ordered_list: {
      marginVertical: 8,
    },
    list_item: {
      marginVertical: 4,
    },
    hr: {
      backgroundColor: "#4d4d4d",
      marginVertical: 16,
    },
    heading1: {
      marginVertical: 10,
    },
    heading2: {
      marginVertical: 10,
    },
    heading3: {
      marginVertical: 10,
    },
  };

  return (
    <View
      className={`flex-row mb-3 px-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <View
        className={`px-4 py-1 rounded-2xl ${
          isUser && "bg-[#262626] max-w-[70%]"
        }`}
      >
        <Markdown style={markdownStyles}>{message}</Markdown>
      </View>
    </View>
  );
};

export default MessageListItem;
