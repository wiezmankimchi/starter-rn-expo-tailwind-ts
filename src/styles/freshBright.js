import { MD3LightTheme as DefaultTheme } from "react-native-paper"
export const theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        //fresh-and-bright
        primary: "#F98866", //Petal
        secondary: "#FF420E", //Poppy
        tritiary: "#80DB9E", //Stem
        quaternary: "#89DA59", //Spring Green
    },
}