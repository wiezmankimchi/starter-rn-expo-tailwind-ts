import { StyleSheet, Text, View } from "react-native"
import React, { memo } from "react"

type Props = {
  children: React.ReactNode
}

const Paragraph = ({ children }: Props) => {
  return (
    <Text className=" text-base leading-7 text-secondary text-center mb-4">{children}</Text>
  )
}

export default memo(Paragraph)

const styles = StyleSheet.create({})
