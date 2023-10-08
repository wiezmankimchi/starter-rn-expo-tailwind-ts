import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native"
import React, { useState } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Config from "@/utils/Config"
import { AppImages } from "@assets/index"
import { CATEGORY_LIST, POPULAR_COURSE_LIST, CATEGORIES } from "@/utils/constants/category"
import { TextInput } from "react-native-paper"
import { CategoryButton } from "@/common/components/elements/CategoryButton"
import CategoryListView from "@/common/components/elements/CategoryListView"

import { useNavigation } from "@react-navigation/native"
import PopularCourseListView from "@/common/components/elements/PopulatCourseListView"
import { MaineNavigationProp } from "App"

const Gallery = () => {
  const [searchtext, setSearchtext] = useState("")
  const insets = useSafeAreaInsets()
  const [selectedCategory, setSelectedCategory] = useState(0)
  const { navigate } = useNavigation<MaineNavigationProp>()
  const paddingTop = Config.isIos ? Math.max(insets.top, 30) : StatusBar.currentHeight

  const ScrollableHeader = () => {
    return (
      <>
        {/* categories */}
        <Text className=" text-black text-xl font-semibold tracking-tight pt-2 pl-5 pr-4 pb-4">
          Category List
        </Text>

        <View className="flex-row pt-2 px-5">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CATEGORIES}
            renderItem={({ item }) => (
              <CategoryButton
                selectedCategory={selectedCategory === item.id ? true : false}
                text={item.title}
                onPress={() => setSelectedCategory(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View className="h-40">
          <FlatList
            contentContainerStyle={{ padding: 16 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CATEGORY_LIST}
            renderItem={(data) => (
              <CategoryListView {...{ data }} onScreenClicked={() => navigate("CourseInfo")} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Text className=" text-black text-xl font-semibold tracking-tight pt-2 pl-5 pr-4 pb-4">
          Popular Courses
        </Text>
      </>
    )
  }

  return (
    <View className=" flex-1 bg-white " style={{ paddingTop }}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View className=" flex-row pt-2 px-5 ">
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text className=" text-gray-500 tracking-wide">Choose your</Text>
          <Text className=" text-black font-bold text-xl tracking-wide">Design Course</Text>
        </View>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image style={{ width: 60, height: 60 }} source={AppImages.design_header_image} />
        </TouchableOpacity>
      </View>

      {/* searchBar */}
      <View className=" mt-4 ml-5 h-16">
        <TextInput
          mode="flat"
          outlineColor="#9ca3af"
          activeOutlineColor="#9ca3af"
          className="bg-slate-50 my-2xs rounded-2xl px-4 w-5/6"
          label={"Search course"}
          value={searchtext}
          onChangeText={(searchtext) => {
            console.log(searchtext)
            setSearchtext(searchtext)
          }}
          right={
            <TextInput.Icon
              icon="magnify"
              onPress={() => console.log("search icon pressed", searchtext)}
            />
          }
        />
      </View>
      {/* Populat Courses*/}

      <View className=" w-full">
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 16 + insets.bottom,
          }}
          numColumns={2}
          columnWrapperStyle={{ paddingHorizontal: 14 }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListHeaderComponent={ScrollableHeader}
          data={POPULAR_COURSE_LIST}
          renderItem={(data) => (
            <PopularCourseListView
              {...{ data }}
              onScreenClicked={() => navigate("CourseInfo")}
            />
          )}
        />
      </View>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({})
