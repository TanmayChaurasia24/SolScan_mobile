import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WalletScreen } from "./src/screens/WalletScreen";
import { SwapScreen } from "./src/screens/SwapScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [activeScreen, SetactiveScreen] = useState<"wallet" | "swap">("wallet");

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0D0D12" }}>
        <View style={{ flex: 1 }}>
          {activeScreen === "wallet" ? <WalletScreen /> : <SwapScreen />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
