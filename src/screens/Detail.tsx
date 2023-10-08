import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

const DetailScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.label}>DetailScreen</Text>
      <Button
        color="rgba(127,103,190,1)"
        title="Navigate to HomeScreen"
        onPress={() => {
          navigation.navigate("Home")
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
  },
})

export default DetailScreen
