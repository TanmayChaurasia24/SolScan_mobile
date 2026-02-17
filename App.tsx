import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WalletScreen } from "./src/screens/WalletScreen";
import { SwapScreen } from "./src/screens/SwapScreen";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [activeScreen, SetactiveScreen] = useState<"wallet" | "swap">("wallet");

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={s.safe}>
        {activeScreen === "wallet" ? <WalletScreen /> : <SwapScreen />}

        {/* Bottom Navigation */}
        <View style={s.bottomNav}>
          <TouchableOpacity
            style={s.tab}
            onPress={() => {
              SetactiveScreen("wallet");
            }}
          >
            <Ionicons
              name={activeScreen === "wallet" ? "wallet" : "wallet-outline"}
              size={24}
              color={activeScreen === "wallet" ? "#14F195" : "#6B7280"}
            />
            <Text
              style={[s.tabLabel, activeScreen === "wallet" && s.tabActive]}
            >
              Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.tab}
            onPress={() => {
              SetactiveScreen("swap");
            }}
          >
            <Ionicons
              name={
                activeScreen === "swap"
                  ? "swap-horizontal"
                  : "swap-horizontal-outline"
              }
              size={24}
              color={activeScreen === "swap" ? "#14F195" : "#6B7280"}
            />
            <Text style={[s.tabLabel, activeScreen === "swap" && s.tabActive]}>
              Swap
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "0D0D12",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#2A2A35",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabLabel: {
    color: "#6B7280",
    fontSize: 12,
  },
  tabActive: {
    color: "#14F195",
  },
});
