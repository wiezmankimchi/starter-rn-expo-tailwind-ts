import { Button } from "react-native-paper"

export interface CategoryBtn {
  text: string
  selectedCategory: boolean
  onPress: () => void
}

export const CategoryButton = ({ selectedCategory, text, onPress }: CategoryBtn) => {
  return (
    <Button
      className="mx-1 w-24"
      mode="outlined"
      compact
      textColor={selectedCategory ? "#f5f5f5" : "#f97316"}
      buttonColor={selectedCategory ? "#f97316" : "#f5f5f5"}
      onPress={onPress}
    >
      {text}
    </Button>
  )
}
