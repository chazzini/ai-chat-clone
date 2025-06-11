import { Text, View, StyleSheet } from "react-native";
import React from "react";
import "../../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { FontAwesome5 } from "@expo/vector-icons";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import HistoryChatDrawer from "@/components/HistoryChatDrawer";
const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
  },
};

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider value={myTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            drawerContent={HistoryChatDrawer}
            initialRouteName="index"
            screenOptions={{
              headerTitle: "",
              headerStyle: { backgroundColor: "black" },
              drawerInactiveTintColor: "white",
              drawerStyle: {
                borderRightColor: "gray",
                borderRightWidth: StyleSheet.hairlineWidth,
              },
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "ChatGPT",
                drawerIcon: ({}) => (
                  <FontAwesome5 name="atom" size={18} color="white" />
                ),
              }}
            />
            <Drawer.Screen
              options={{ drawerItemStyle: { display: "none" } }}
              name="chat/[id]"
            />
          </Drawer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
