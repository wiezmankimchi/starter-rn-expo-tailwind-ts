import React from "react"
import { Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"

const Hello = () => {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-red-700">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  )
}

export default Hello
