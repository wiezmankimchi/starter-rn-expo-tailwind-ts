import React from "react"
import { Pressable, StyleProp, ViewStyle, PressableProps } from "react-native"
import Config from "@/utils/Config"

interface Props extends PressableProps {
  style?: StyleProp<ViewStyle>
  touchOpacity: number
}

const WKPressable: React.FC<Props> = ({
  style,
  android_ripple = { color: "lightgrwy" },
  touchOpacity = 0.4,
  children,
  ...restOfProps
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        { opacity: !Config.isAndroid && pressed ? touchOpacity : 1 },
      ]}
      android_ripple={android_ripple}
      {...restOfProps}
    >
      {children}
    </Pressable>
  )
}

export default WKPressable
