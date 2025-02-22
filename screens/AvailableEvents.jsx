import React from "react";
import { SafeAreaView, Image } from "react-native";

const logoUp = () => {
  return require("../assets/splash.png");
};
export default function AvailableEvents() {
  return (
    <SafeAreaView>
      <Image
        style={{ width: 200, height: 200, marginBottom: 15 }}
        source={logoUp()}
      />
    </SafeAreaView>
  );
}
