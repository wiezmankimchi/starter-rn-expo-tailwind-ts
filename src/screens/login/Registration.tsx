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
import { emailValidator, passwordValidator, nameValidator } from "@/utils"

const Registration = () => {
  const { navigate } = useNavigation<MaineNavigationProp>()
  const [name, setName] = useState({ value: "", error: "" })
  const [email, setEmail] = useState({ value: "", error: "" })
  const [password, setPassword] = useState({ value: "", error: "" })

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigate("Dashboard")
  }

  return (
    <Background>
      <BackButton goBack={() => navigate("Login")} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        className=" lg:w-1/4 lg:mx-auto"
        label={"Name"}
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        className=" lg:w-1/4 lg:mx-auto"
        label={"Email"}
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
      <Button mode="contained" onPress={_onSignUpPressed} className=" bg-primary md:w-1/4">
        Sign Up
      </Button>
      <View className="flex-row">
        <Text className="text-secondary">Already have an account? </Text>
        <TouchableOpacity onPress={() => navigate("Login")}>
          <Text className="link">Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default Registration

const styles = StyleSheet.create({})
