import { Animated, ListRenderItemInfo, StyleSheet, Text, View, Image } from "react-native"
import React, { useEffect, useRef } from "react"
import { CategoryType } from "@/utils/constants/category"
import WKPressable from "./WKPressable"
import { AppImages } from "@assets/index"
import { IconButton } from "react-native-paper"

interface Props {
  data: ListRenderItemInfo<CategoryType>
  onScreenClicked: () => void
}

const CategoryListView: React.FC<Props> = ({ data, onScreenClicked }) => {
  const { item } = data

  const translateX = useRef<Animated.Value>(new Animated.Value(50)).current
  const opacity = useRef<Animated.Value>(new Animated.Value(0)).current

  useEffect(() => {
    console.log("cat ", item.id)
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 1000,
        delay: item.id * (1000 / 3),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        delay: item.id * (1000 / 3),
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  return (
    <Animated.View
      className={"rounded-2xl overflow-hidden"}
      style={{ opacity, transform: [{ translateX }] }}
    >
      <WKPressable
        className="flex-1 h-32 max-h-32 w-64"
        touchOpacity={0.6}
        onPress={onScreenClicked}
      >
        <View className="flex-row">
          <View className=" z-10 py-6 pl-4">
            <Image className="rounded-2xl aspect-square w-20 h-20" source={item.imagePath} />
          </View>
          <View className="z-0 flex-1 -ml-12 rounded-2xl bg-slate-100">
            <View className="flex-col ml-16 mt-1">
              <View className="h-12">
                <Text
                  numberOfLines={2}
                  className=" text-sm tracking-tighter text-blue-800 font-medium"
                >
                  {item.title}
                </Text>
              </View>
              <View className="" />
              <View className="flex-row items-center pr-4 justify-between align-middle">
                <Text className="text-md tracking-wide color-gray-400">
                  {item.lessonCount} lessons
                </Text>

                <Text className="text-md tracking-wide pl-7">{item.rating}</Text>
                <IconButton
                  icon="star"
                  size={12}
                  iconColor="rgb(0, 182, 240)"
                  className="pr-4"
                />
              </View>
              <View className="flex-row pr-4 color-cyan-400">
                <Text className="flex-1 text-lg tracking-wide ">${item.money}</Text>
                <IconButton
                  className="pb-4 pl-3"
                  icon="plus-circle"
                  iconColor="rgb(0,182,240)"
                  size={20}
                  onPress={() => console.log(`Add course ${item.id}`)}
                />
              </View>
            </View>
          </View>
        </View>
        {/* <View className="pl-4 py-4"> */}
        {/* </View> */}
      </WKPressable>
    </Animated.View>
  )
}

export default CategoryListView

const styles = StyleSheet.create({})
