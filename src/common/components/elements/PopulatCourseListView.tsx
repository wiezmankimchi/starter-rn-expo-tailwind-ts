import { Animated, ListRenderItemInfo, StyleSheet, Text, View, Image } from "react-native"
import React, { useEffect, useRef } from "react"
import { CourseType } from "@/utils/constants/category"
import WKPressable from "./WKPressable"
import { AppImages } from "@assets/index"
import { IconButton } from "react-native-paper"

interface Props {
  data: ListRenderItemInfo<CourseType>
  onScreenClicked: () => void
}

const PopularCourseListView: React.FC<Props> = ({ data, onScreenClicked }) => {
  const { index, item } = data

  const translateY = useRef<Animated.Value>(new Animated.Value(50)).current
  const opacity = useRef<Animated.Value>(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  return (
    <Animated.View
      className={"rounded-2xl overflow-hidden my-4"}
      style={{ opacity: opacity, transform: [{ translateY }] }}
      renderToHardwareTextureAndroid
    >
      <View className="flex-1 mr-4 rounded-2xl bg-slate-200 w-40 p-2">
        <WKPressable
          className="flex-1"
          style={{ aspectRatio: 1 }}
          touchOpacity={1}
          onPress={onScreenClicked}
        >
          <View className="">
            <View className="h-10">
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
              <IconButton icon="star" size={12} iconColor="rgb(0, 182, 240)" className="pr-4" />
            </View>
            <View
              className="rounded-xl mx-4 mb-1"
              style={{
                elevation: 2,
                shadowColor: "#9ca3af",
                shadowOffset: { width: 0, height: 0 },
                // shadowOpacity: 0.22,
                shadowRadius: 6.0,
              }}
            >
              <Image
                className="rounded-xl h-16 w-32 "
                style={{ aspectRatio: 1.33 }}
                source={item.imagePath}
              />
            </View>
          </View>
        </WKPressable>
      </View>
    </Animated.View>
  )
}

export default PopularCourseListView

const styles = StyleSheet.create({})
