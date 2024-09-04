import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  console.log("--root layout index--");
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-yellow-200">
      <Text>Open up to start working on app!</Text>
    </SafeAreaView>
  );
};

export default Home;
