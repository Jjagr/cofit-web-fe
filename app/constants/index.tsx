import { ActType } from "types/Activity";

export type Activity = {
  type: ActType;
  user: string;
  title: string;
  time: Date;
  helpful: number;
  comment: number;
  tag: Array<string>;
};

export const ACTIVITIES: Array<Activity> = [
  {
    type: ActType.MealPlan,
    user: "Renaldi Arlin",
    title: "3 Months Weight Loss Program",
    time: new Date("September 17, 2021 15:27:00"),
    helpful: 50,
    comment: 10,
    tag: ["Weight Loss"],
  },
  {
    type: ActType.MealPlan,
    user: "Jacelyn Felisha",
    title: "Vegan Meal Plan",
    time: new Date("September 15, 2021 07:00:00"),
    helpful: 50,
    comment: 10,
    tag: ["Diet Plan", "Vegan"],
  },
  {
    type: ActType.MealPlan,
    user: "Renaldi Arlin",
    title: "Strength Training Program",
    time: new Date("September 15, 2021 07:00:00"),
    helpful: 50,
    comment: 10,
    tag: ["Workout Program"],
  },
];

type Feature = {
  image: string;
  title: string;
  caption: React.ReactNode;
  alignText: "left" | "right";
  comingSoon?: boolean;
};

export const FEATURE: Array<Feature> = [
  {
    image: "/image/feature1.png",
    alignText: "left",
    title: "Workout menjadi lebih mudah",
    caption: (
      <p>
        Sekarang tidak perlu pusing lagi <b>menghitung jumlah gerakan</b> yang
        sudah dilakukan! Tak hanya itu, Groofit juga akan membantu{" "}
        <b>memeriksa akurasi gerakanmu</b>!
      </p>
    ),
  },
  {
    image: "/image/feature2.png",
    alignText: "right",
    title: "Olahraga bersama tanpa peduli jarak dan waktu",
    caption: (
      <p>
        <b>Olahraga bareng</b> dengan Groofit jadi lebih mudah! Kalian bisa
        melihat <b>Real Time Leaderboard</b> jumlah gerakan teman dari{" "}
        <b>Movement Assistant</b> yang <b>bikin semangat</b>!
      </p>
    ),
  },
  {
    image: "/image/feature3.png",
    alignText: "left",
    title: "Program Workout",
    caption: (
      <p>
        Susun <b>program workout sesuai dengan kebutuhanmu.</b> Kalian bisa
        membuatnya sendiri atau mengikuti program orang lain atau{" "}
        <b>membagikan program</b> buatanmu!
      </p>
    ),
  },
  {
    image: "/image/feature4.png",
    alignText: "right",
    title: "Pola makan menjadi lebih terjaga!",
    caption: (
      <p>
        Workout juga perlu dilengkapi dengan <b>nutrisi yang seimbang.</b>{" "}
        Kalian bisa <b>menyusun program diet</b> dengan Groofit! Selain itu,
        kalian juga bisa <b>memesan katering makanan sehat</b> dengan kualitas
        yang terjamin.
      </p>
    ),
    comingSoon: true,
  },
];

type Testi = {
  name: string;
  text: string;
};

export const TESTIMONI: Array<Testi> = [
  {
    text: "“Fitur komunitasnya kayaknya bikin bakal lebih sering olahraga di komunitas daripada olahraga sendiri.”",
    name: "MG",
  },
  {
    text: "“Menarik, jadi bisa olahraga bareng meskipun lagi beda tempat dan kayaknya bakal seru banget soalnya aku kompetitif.”",
    name: "IHS",
  },
  {
    text: "“Senang banget jadi bisa ngajak temen olahraga bareng!”",
    name: "MF",
  },
  {
    text: "“Konsepnya simple tapi menarik. Ada trackernya juga, keren banget!”",
    name: "GER",
  },
  {
    text: "“Movement assistantnya keren banget, baru pernah lihat di Groofit.”",
    name: "IA",
  },
];
