import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

// Import i18n
import "./src/locales/i18n";

// Import navigation
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Load any resources or data needed before rendering the app
  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
        });
      } catch (e) {
        console.warn("Error loading resources:", e);
      } finally {
        // Simulate a short delay for a smoother loading experience
        setTimeout(() => {
          setIsReady(true);
        }, 500);
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A80F0" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
});
