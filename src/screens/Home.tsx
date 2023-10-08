import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { MaineNavigationProp } from "App"
import { Button } from "react-native-paper"

const Home = () => {
  const { navigate } = useNavigation<MaineNavigationProp>()

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>HomeScreen</Text>
        <Button
          className="mb-3"
          mode="contained"
          onPress={() => {
            navigate("Detail")
          }}
        >
          Detaile Screen
        </Button>
        <Button
          className="mb-3"
          mode="outlined"
          onPress={() => {
            navigate("Gallery")
          }}
        >
          Galley Screen
        </Button>
        <Button
          className="mb-3"
          mode="outlined"
          onPress={() => {
            navigate("Login")
          }}
        >
          Login
        </Button>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 40,
  },
})
