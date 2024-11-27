import React from "react";
import { Stack } from "expo-router";

const ServicesLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
          color: "#333333"
        },
        headerTintColor: "#333333" // Ensures back button color matches theme
      }}
    >
      <Stack.Screen
        name="professionals"
        options={{ title: "Select Trainer" }}
      />
    </Stack>
  );
};

export default ServicesLayout;
