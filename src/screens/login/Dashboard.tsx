import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { MaineNavigationProp } from "App"
import Logo from "@/common/components/login/Logo"
import Header from "@/common/components/login/Header"
import Button from "@/common/components/login/Button"
import Background from "@/common/components/login/Background"
import { emailValidator } from "@/utils"
import Paragraph from "@/common/components/login/Paragraph"

const Dashboard = () => {
  const { navigate } = useNavigation<MaineNavigationProp>()

  return (
    <Background>
      <Logo />
      <Header>Let's Start</Header>

      <Paragraph>
        Your amazing things starts here. Open your mind and start coding new things to these
        pages.
      </Paragraph>

      <Button
        mode="contained"
        onPress={() => navigate("Home")}
        className=" bg-primary md:w-1/4"
      >
        Logout
      </Button>
    </Background>
  )
}

export default Dashboard

const styles = StyleSheet.create({})
