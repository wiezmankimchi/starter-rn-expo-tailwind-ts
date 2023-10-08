import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack"
import { PaperProvider } from "react-native-paper"
import { NativeWindStyleSheet } from "nativewind"

import Home from "@/screens/Home"
import { theme } from "@/styles/Theme"
import Detail from "@/screens/Detail"
import Gallery from "@/screens/gallery/Gallery"
import CourseInfo from "@/screens/gallery/CourseInfo"
import Login from "@/screens/login/Login"
import Dashboard from "@/screens/login/Dashboard"
import Registration from "@/screens/login/Registration"
import ForgotPassword from "@/screens/login/ForgotPassword"

type RootStackParamList = {
  Home: undefined //undefined - route does not have parameters
  Login: undefined
  Detail: undefined
  Dashboard: undefined
  Registration: undefined
  ForgotPassword: undefined
  Gallery: undefined
  CourseInfo: undefined
}

export type MaineNavigationProp = NativeStackNavigationProp<RootStackParamList>

const MainNavigator = createNativeStackNavigator<RootStackParamList>()

NativeWindStyleSheet.setOutput({
  default: "native",
})

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainNavigator.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <MainNavigator.Screen name="Detail" component={Detail} />
          <MainNavigator.Screen name="Dashboard" component={Dashboard} />
          <MainNavigator.Screen name="Registration" component={Registration} />
          <MainNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
          <MainNavigator.Screen name="CourseInfo" component={CourseInfo} />
          <MainNavigator.Screen name="Gallery" component={Gallery} />
          <MainNavigator.Screen name="Login" component={Login} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
