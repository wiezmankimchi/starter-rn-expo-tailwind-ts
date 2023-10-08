import { StyleSheet } from "react-native"
import React, { memo } from "react"
import { Button as PaperButton } from "react-native-paper"
import { theme } from "@/utils/theme"

type Props = React.ComponentProps<typeof PaperButton>

const Button = ({ mode, style, children, ...props }: Props) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  )
}

export default memo(Button)

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
})
