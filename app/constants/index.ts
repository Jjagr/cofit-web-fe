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
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra posuere sed vel commodo et. Pharetra ut tellus scelerisque nunc vitae quam et eleifend. Vitae varius orci aenean congue in nulla augue. Neque nullam dignissim orci turpis. Mi facilisi egestas sit sapien mi.",
    },
    {
      image: "/image/eat.png",
      link: "/",
      title: "FitEat",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra posuere sed vel commodo et. Pharetra ut tellus scelerisque nunc vitae quam et eleifend. Vitae varius orci aenean congue in nulla augue. Neque nullam dignissim orci turpis. Mi facilisi egestas sit sapien mi.",
    },
    {
      image: "/image/log.png",
      link: "/",
      title: "FitLog",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra posuere sed vel commodo et. Pharetra ut tellus scelerisque nunc vitae quam et eleifend. Vitae varius orci aenean congue in nulla augue. Neque nullam dignissim orci turpis. Mi facilisi egestas sit sapien mi.",
    },
  ];
