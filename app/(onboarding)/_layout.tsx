import React from "react";
import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // No headers for onboarding
        animation: "fade" // Smooth transition between screens
      }}
    />
  );
}
