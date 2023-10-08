import { StyleSheet, Image, TouchableOpacity } from "react-native"
import React, { memo } from "react"
import { IconButton } from "react-native-paper"
import { theme } from "@/styles/Theme"
import { getStatusBarHeight } from "react-native-status-bar-height"

type Props = {
  goBack: () => void
}

const BackButton = ({ goBack }: Props) => {
  return (
    <IconButton
      icon="chevron-left"
      style={styles.container}
      iconColor={theme.colors.primary}
      size={32}
      onPress={goBack}
    />
  )
}

export default memo(BackButton)

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 10,
    width: 24,
    height: 24,
  },
})
