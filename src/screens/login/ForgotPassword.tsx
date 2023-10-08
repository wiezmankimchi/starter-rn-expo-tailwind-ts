import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { MaineNavigationProp } from "App"
import Logo from "@/common/components/login/Logo"
import BackButton from "@/common/components/login/BackButton"
import Header from "@/common/components/login/Header"
import TextInput from "@/common/components/login/TextInput"
import Button from "@/common/components/login/Button"
import Background from "@/common/components/login/Background"
import { emailValidator } from "@/utils"

const ForgotPassword = () => {
  const { navigate } = useNavigation<MaineNavigationProp>()
  const [email, setEmail] = useState({ value: "", error: "" })

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value)

    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigate("Login")
  }
  return (
    <Background>
      <BackButton goBack={() => navigate("Login")} />
      <Logo />
      <Header>Restore Password</Header>

      <TextInput
        className=" lg:w-1/4 lg:mx-auto"
        label={"Email address"}
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} className=" bg-primary md:w-1/4">
        Send Reset Instructions
      </Button>
      <View className="flex-row">
        <TouchableOpacity onPress={() => navigate("Login")}>
          <Text className="link">Back to Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})
