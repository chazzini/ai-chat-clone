import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatInput = ({ onSend, isLoading }) => {
  const insets = useSafeAreaInsets();
  const [message, setMessage] = useState();

  const handleSend = () => {
    setMessage(" ");
    try {
      onSend(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <View
        className={`bg-[#262626] rounded-t-2xl`}
        style={{ paddingBottom: insets.bottom }}
      >
        <TextInput
          value={message}
          onChangeText={(e) => {
            setMessage(e);
          }}
          placeholder="Ask anything"
          className="pt-6 pb-2 px-4 text-white"
          multiline
          placeholderTextColor="gray"
        />
        <View className="flex-row justify-between px-4 items-center mt-4">
          <MaterialCommunityIcons name="plus" color="white" size={24} />

          {message ? (
            <MaterialCommunityIcons
              name="send"
              size={28}
              color="white"
              onPress={handleSend}
              disabled={isLoading}
            />
          ) : (
            <TouchableOpacity className="bg-white flex-row gap-2 p-2 rounded-full items-center">
              <MaterialCommunityIcons name="account-voice" size={15} />
              <Text>Voice</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
