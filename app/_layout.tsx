import React, { useEffect } from "react";
import { Slot, Stack, useRouter } from "expo-router";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = React.useState<
    boolean | null
  >(null); // Use null to handle the loading state
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = false; // await AsyncStorage.getItem("onboardingCompleted") === "true";
      setIsOnboardingCompleted(completed);
    };
    checkOnboarding();
  }, []);

  useEffect(() => {
    if (isOnboardingCompleted === false) {
      router.replace("/(onboarding)/onboarding");
    }
  }, [isOnboardingCompleted]);

  if (isOnboardingCompleted === null) {
    return null; // Can replace with a loading spinner or splash screen
  }

  return <Slot />;
}
