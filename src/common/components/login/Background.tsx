import React, { memo } from "react"
import { StyleSheet, View } from "react-native"

type Props = {
  children: React.ReactNode
}

const Header = ({ children }: Props) => (
  <View className="w-full h-screen flex flex-1 items-center justify-center p-5 self-center">
    {children}
  </View>
)

const styles = StyleSheet.create({})

export default memo(Header)
