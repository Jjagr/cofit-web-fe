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

export const QUESTIONS: Array<any> = [
  {
    question: {
      title: "Gimana cara kurus tapi tetep makan enak?",
      desc: `Sebenernya udah dari lama mau kurus tapi selalu penasaran\nBisa nggak si diet tapi dengan makanan yang enak`,
      user: "Bob Daniel",
		  time: "2021-09-05T14:48:00.000Z",
      helpful: 52,
      answers: 1,
    },
    tags: ["Weight Loss", "Meal Plan"],
    answer: `Banyak orang yang mengatakan cara menguruskan badan adalah dengan berolahraga, tidak melewatkan sarapan, hanya boleh makan makanan bersih, dll. Tetapi sebenarnya cara menurunkan berat badan pada intinya adalah kalori defisit, 
Apa itu kalori defisit? Kalori defisit adalah keadaan dimana jumlah energi yang masuk (bisa dihitung dari makanan yang kita makan) lebih sedikit dibandingkan jumlah energi yang keluar (bisa dihitung dari aktivitas) selama 1 hari. 
Untuk mengetahui estimasi jumlah energi yang keluar pada satu hari atau Total Daily Energy Expenditure (TDEE) dapat menggunakan kalkulator pada website ini https://tdeecalculator.net/.
Dari penjelasan sebelumnya, ternyata kita jadi tahu kalau sebenarnya kita boleh makan apapun termasuk makanan enak selama kita berhasil berada pada keadaan kalori defisit pada hari tersebut. 
Yuk, cobain berada di keadaan kalori defisit sekitar 500 cal dari TDEE kamu setiap hari selama 1 minggu, dan lihat penurunan berat badan mu!`
  },
  {
    question: {
      title: "Berapa lama dan kapan waktu tepat berjemur untuk vitamin D?",
      desc: `Kata orang kan buat mencegah covid itu bisa dengan berjemur dibawah matahari
Tapi aku selalu gatau waktu yang tepat itu jam berapa dan berapa lama.
Apakah jam 9 sudah terlalu siang karena aku selalu biasanya jam segini`,
      user: "Caroline Anggawati",
		  time: "2021-09-07T14:48:00.000Z",
      helpful: 55,
      answers: 1,
    },
    tags: ["Vitamin"],
    answer:`Terdapat banyak faktor untuk mendapatkan vitamin D bagi manusia. Salah satunya adalah durasi dan waktu ketika berjemur di bawah cahaya matahari.
Oleh karena itu, kita harus memahami terlebih dahulu tentang cahaya matahari. Terdapat banyak jenis sinar matahari, UVA, UVB, UVC. Tetapi pada intinya sinar matahari dapat dibedakan dari terik atau tidaknya. Semakin terik sinar matahari, semakin cepat laju vitamin D yang diproduksi oleh tubuh kita, tetapi juga semakin besar risiko efek sampingnya (seperti kanker kulit) bila dilakukan terus menerus.  
Nah, dari info sebelumnya, intinya semakin terik sinar matahari, artinya saat siang hari, kita tidak boleh berjemur terlalu lama, tetapi ketika sinar matahari tidak begitu terik, kita perlu berjemur lebih lama karena laju produksi vitamin D lebih lambat. 
Ya, jadi intinya durasi dan waktu berjemur yang tepat bergantung, tetapi untuk memudahkan, biasanya di Indonesia, kita dapat berjemur selama 10 menit saat jam 10`
  },
  {
    question: {
      title: "Kenapa bangun tidur selalu lelah?",
      desc: `Ini selalu kejadian semenjak kuliah, badan selalu pegel - pegel gitu`,
      user: "Doe John",
		  time: "2021-09-12T14:48:00.000Z",
      helpful: 61,
      answers: 1,
    },
    tags: ["Sleep"],
    answer: `Ada banyak faktor yang memengaruhi kualitas tidur, mulai dari konsumsi makanan atau minuman, gangguan tidur, lingkungan tidur, blue light exposure, dan sleep inertia
Bila mengonsumsi makanan atau minuman seperti kopi sebelum tidur, tentunya kualitas tidur akan terganggu sehingga, ketika bangun lelah.
Bila anda memiliki gangguan tidur seperti Sleep Apnea yang menyebabkan pernapasan seseorang berhenti sementara ketika tidur, tentunya akan mengurangi kualitas tidur.
Lingkungan tidur tentunya juga mempengaruhi kualitas tidur, bila terdapat banyak gangguan seperti kasur yang kurang nyaman juga bisa menjadi faktor kenapa anda lelah setiap kali bangun tidur.
Blue light exposure adalah cahaya dengan energi tinggi tetapi tidak setinggi UV, blue light dihasilkan dari berbagai gawai seperti handphone, laptop, dan lain-lain. Bila kita masih sering bermain handphone sebelum tidur tentunya akan mengurangi kualitas tidur.
Sleep Inertia adalah keadaan otak yang masih berada pada transisi tidur ke keadaan bangun, sehingga tubuh masih terasa lelah.
Nah, supaya bangun tidur seger, perlu mengesolve problem tadi yang kamu alamin. Semoga tidur makin nyenyak ya!`
  },
]

export const ACTIVITIES: Array<Activity>  = [
    {
        type: ActType.MealPlan,
        user: "Renaldi Arlin",
        title: "3 Months Weight Loss Program",
        time: new Date("September 17, 2021 15:27:00"),
        helpful: 50,
        comment: 10,
        tag: ["Weight Loss"]
    },
    {
        type: ActType.MealPlan,
        user: "Jacelyn Felisha",
        title: "Vegan Meal Plan",
        time: new Date("September 15, 2021 07:00:00"),
        helpful: 50,
        comment: 10,
        tag: ["Diet Plan","Vegan"]
    },
    {
        type: ActType.MealPlan,
        user: "Renaldi Arlin",
        title: "Strength Training Program",
        time: new Date("September 15, 2021 07:00:00"),
        helpful: 50,
        comment: 10,
        tag: ["Workout Program"]
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
