import { Text, View, Button, StyleSheet, Image } from "react-native"
import React from "react"
import { useTheme, Chip } from "react-native-paper"

const Card = ({ image, category, title, price, description }) => {
  const theme = useTheme()
  return (
    <View
      className={
        " mt-5 w-full bg-blue-300 shadow-2xl shadow-red-900 rounded-xl overflow-hidden"
      }
    >
      <Image source={{ uri: image }} className="w-full h-48 " style={{ resizeMode: "cover" }} />
      <View className=" p-8 flex flex-col gap-1">
        <Text className="flex items-center gap-2 text-xl font-semibold text-sky-950">
          {title}
        </Text>

        <View className="flex flex-row">
          <Chip compact>{category}</Chip>
          {/* <Text className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
            {category}
          </Text> */}
        </View>

        <Text style={{ backgroundColor: theme.colors.fifth }}>{price}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

export default Card

const classNames = StyleSheet.create({})
