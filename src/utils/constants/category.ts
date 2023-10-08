import { AppImages } from "@assets/index";
export interface Category {
    id: number
    title: string
}

export interface CategoryType {
    id: number
    imagePath: any
    title: string
    lessonCount: number
    money: number
    rating: number
}

export interface CourseType {
    id: number
    categoryID: number
    imagePath: any
    title: string
    lessonCount: number
    money: number
    rating: number
}
export const CATEGORIES: Category[] = [
    { id: 0, title: "UI/UX" }, { id: 1, title: "Coding" }, { id: 2, title: "Basic UI" }, { id: 3, title: "UUID/CUID" }, { id: 4, title: "Coding" }, { id: 5, title: "Basic UI" },]

export const CATEGORY_LIST: CategoryType[] = [
    {
        id: 0,
        imagePath: AppImages.interFace1,
        title: 'User interface design for international',
        lessonCount: 24,
        money: 25,
        rating: 4.3
    },
    {
        id: 1,
        imagePath: AppImages.interFace2,
        title: 'UX design',
        lessonCount: 22,
        money: 18,
        rating: 4.6
    },
    {
        id: 2,
        imagePath: AppImages.interFace1,
        title: 'UI Design',
        lessonCount: 24,
        money: 89,
        rating: 4.3
    },
    {
        id: 3,
        imagePath: AppImages.interFace1,
        title: 'UX/UI Design',
        lessonCount: 24,
        money: 250,
        rating: 4.8
    },
]

export const POPULAR_COURSE_LIST: CourseType[] = [
    {
        id: 0,
        categoryID: 0,
        imagePath: AppImages.interFace3,
        title: 'User interface design for international',
        lessonCount: 12,
        money: 25,
        rating: 4.8
    },
    {
        id: 1,
        categoryID: 1,
        imagePath: AppImages.interFace4,
        title: 'Web design course',
        lessonCount: 2,
        money: 108,
        rating: 4.9
    },
    {
        id: 2,
        categoryID: 0,
        imagePath: AppImages.interFace1,
        title: 'Python Design course',
        lessonCount: 24,
        money: 250,
        rating: 4.3
    },
    {
        id: 3,
        categoryID: 2,
        imagePath: AppImages.interFace2,
        title: 'Mobile design course',
        lessonCount: 24,
        money: 349,
        rating: 4.8
    },
    {
        id: 4,
        categoryID: 3,
        imagePath: AppImages.interFace3,
        title: 'App design course',
        lessonCount: 12,
        money: 25,
        rating: 4.8
    },
    {
        id: 5,
        categoryID: 1,
        imagePath: AppImages.interFace4,
        title: 'Web design course',
        lessonCount: 2,
        money: 108,
        rating: 4.9
    },
    {
        id: 6,
        categoryID: 2,
        imagePath: AppImages.interFace1,
        title: 'Python Design course',
        lessonCount: 24,
        money: 250,
        rating: 4.3
    },
    {
        id: 7,
        categoryID: 2,
        imagePath: AppImages.interFace2,
        title: 'Mobile design course',
        lessonCount: 24,
        money: 349,
        rating: 4.8
    },
]