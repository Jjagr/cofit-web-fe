import {ActType} from 'types/Activity';

export type Activity = {
    type: ActType
    user: string
    title: string
    time: Date
    helpful: number
    comment: number
    tag: Array<string>
}

export const DATA: Array<Activity>  = [
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "My 7 Days Diet Meal Plan",
        time: new Date("September 17, 2021 15:27:00"),
        helpful: 50,
        comment: 10,
        tag: ["Meal"]
    },
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "My 7 Days Diet Meal Plan",
        time: new Date("September 15, 2021 07:00:00"),
        helpful: 50,
        comment: 10,
        tag: ["Meal"]
    },
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "My 7 Days Diet Meal Plan",
        time: new Date("September 15, 2021 07:00:00"),
        helpful: 50,
        comment: 10,
        tag: ["Meal"]
    },
];

export const FEATURE = [
    {
      image: "/image/move.png",
      link: "/",
      title: "FitMove",
      desc: "Customizable workout program journal equipped with clear guidance",
    },
    {
      image: "/image/eat.png",
      link: "/",
      title: "FitEat",
      desc: "Customizable meal plan journal equipped with clear detailed meal nutrition",
    },
    {
      image: "/image/log.png",
      link: "/",
      title: "FitLog",
      desc: "Health tracker to boost people’s motivation to implement the healthy lifestyle.",
    },
  ];
