import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { MaineNavigationProp } from "App"
import Logo from "@/common/components/login/Logo"
import BackButton from "@/common/components/login/BackButton"
import Header from "@/common/components/login/Header"
import TextInput from "@/common/components/login/TextInput"
import Button from "@/common/components/login/Button"
import { emailValidator, passwordValidator } from "@/utils"
import Background from "@/common/components/login/Background"

const Login = () => {
  const { navigate } = useNavigation<MaineNavigationProp>()
  const [email, setEmail] = useState({ value: "", error: "" })
  const [password, setPassword] = useState({ value: "", error: "" })

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    navigate("Dashboard")
  }

  return (
    <Background>
      <BackButton goBack={() => navigate("Home")} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        className=" lg:w-1/4 lg:mx-auto"
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        className=" lg:w-1/4 lg:mx-auto"
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        autoCapitalize="none"
        secureTextEntry
      />
      <View className="w-full items-end  lg:w-1/4 mb-6">
        <TouchableOpacity onPress={() => navigate("ForgotPassword")}>
          <Text className=" text-secondary">Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={_onLoginPressed} className=" bg-primary md:w-1/4">
        Login
      </Button>
      <View className="flex-row">
        <Text className="text-secondary">Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigate("Registration")}>
          <Text className="link">Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default Login

const styles = StyleSheet.create({})
