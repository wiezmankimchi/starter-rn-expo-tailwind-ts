import { StyleSheet, Text, View } from "react-native"
import React, { memo } from "react"
import { TextInput as Input } from "react-native-paper"
import { theme } from "@/styles/Theme"

type Props = React.ComponentProps<typeof Input> & { errorText?: string }

const TextInput = ({ errorText, ...props }: Props) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

export default memo(TextInput)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
})
