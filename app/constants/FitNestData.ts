import {ActType} from 'types/Activity';

export type Activity = {
    type: ActType
    user: string
    title: string
    time: Date
    helpful: number
    comment: number
}

const data: Array<Activity>  = [
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "My 7 Days Diet Meal Plan",
        time: new Date("September 17, 2021 15:27:00"),
        helpful: 50,
        comment: 10
    },
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "My 7 Days Diet Meal Plan",
        time: new Date("September 15, 2021 07:00:00"),
        helpful: 50,
        comment: 10
    },
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "My 7 Days Diet Meal Plan",
        time: new Date("September 15, 2021 07:00:00"),
        helpful: 50,
        comment: 10
    },
];

export default data;
