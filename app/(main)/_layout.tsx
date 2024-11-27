import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Feather from "@expo/vector-icons/Feather";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute" // For iOS to show blur effect
          },
          default: {}
        })
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          )
        }}
      />

      {/* Professionals Tab */}
      <Tabs.Screen
        name="professionals"
        options={{
          title: "Professionals",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-md" size={24} color={color || "#666"} />
          )
        }}
      />

      {/* AI Chat Tab */}
      <Tabs.Screen
        name="aiChat"
        options={{
          title: "", // Leave the title blank
          tabBarIcon: () => (
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              duration={800}
              style={styles.circleTab}
            >
              <Image
                source={{
                  uri: "https://media.istockphoto.com/id/1333222351/photo/4k-resolution-of-digital-eye-wave-lines-stock-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=vxCUZmHNli-6m54P2budQrY39899aiHycRMiKH1Hs3k="
                }}
                style={styles.premiumIcon}
              />
            </Animatable.View>
          ),
          tabBarStyle: {
            position: "absolute"
          }
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          )
        }}
      />

      {/* Settings Tab */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  circleTab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // This lifts the tab icon above the bar
    overflow: "hidden", // Ensures the image stays within the circle
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    backgroundColor: "#4CAF50",
    opacity: 0.8
  },
  premiumIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover" // Fills the entire circle
  }
});
