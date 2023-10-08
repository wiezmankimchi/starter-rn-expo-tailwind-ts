import { theme } from "@/styles/Theme"
import React, { memo } from "react"
import { StyleSheet, Text } from "react-native"

type Props = {
  children: React.ReactNode
}

const Header = ({ children }: Props) => (
  <Text className=" text-3xl text-primary font-bold py-4">{children}</Text>
)

const styles = StyleSheet.create({})

export default memo(Header)
