import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import chatHistoryData from "../../assets/data/chatHistory.json";
import { usePathname, useRouter } from "expo-router";

const HistoryChatDrawer = (props: DrawerContentComponentProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      {chatHistoryData.map((item) => {
        return (
          <DrawerItem
            key={item.id}
            label={item.title}
            onPress={() => {
              router.push(`chat/${item.id}`);
            }}
            focused={pathname === `/chat/${item.id}`}
            inactiveTintColor="white"
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default HistoryChatDrawer;
