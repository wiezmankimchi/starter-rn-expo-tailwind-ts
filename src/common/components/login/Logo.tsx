import { StyleSheet, Image } from "react-native"
import React, { memo } from "react"
import { AppImages } from "@assets/index"

const Logo = () => {
  return (
    <>
      <Image source={AppImages.logo} style={styles.image} />
    </>
  )
}

export default memo(Logo)

const styles = StyleSheet.create({
  image: {
    width: 225,
    height: 41,
    marginBottom: 12,
  },
})
