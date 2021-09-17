import styles from './Nest.module.css';
import type { NextPage } from "next";
import { DATA } from '@constant/index';
import Button from '@element/Button/Button';
import InputBar from '@module/InputBar/InputBar';
import ActivityCard from '@module/ActivityCard/ActivityCard';
import QuestionCard from '@module/QuestionCard/QuestionCard';

const Nest: NextPage = () => {
    return (
        <div>
            <InputBar
                password={false}
                inline={false}
                width="w-full"
                shadow={false}
                placeholder='Ask anything "Cara kurus gimana?"'
                onchange={()=>console.log("test")}
            />
            <div className="flex lg:flex-row justify-center flex-col pt-10">
                <div className={`flex flex-col ${styles.filter} lg:pr-16`}>
                    test
                </div>
                <div className={`flex flex-col ${styles.content}`}>
                    <div className={`flex flex-row items-center overflow-x-auto justify-between`}>
                    {
                        DATA.map((val,idx) => (
                            <div key={idx} className="pr-3">
                                <ActivityCard 
                                   
                                    imgSrc='/image/eat.png'
                                    activity={val}
                                />
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex flex-row-reverse mt-8">
                        <Button
                            color="none"
                            rounded="rounded-10"
                            className="bg-secondary-orange text-primary-50 w-48"
                            onClick={()=>console.log("test")}
                        >See More...</Button>
                    </div>
                    <div className="mt-9">
                        <div className="pb-4">
                            <QuestionCard 
                                tags={["Workout","Chest"]}
                                question={{
                                    title: "Bagaimana cara Push Up",
                                    desc: `Asli susah banget mau push up aja tu
                                    Kyk gimana caranya soalnya susah bgt dorong badan keatas
                                    Mungkina da yang bisa jawab`,
                                    user: "Jacelyn Felisha",
                                    time: new Date("September 17, 2021 15:27:00"),
                                    helpful: 20,
                                    answers: 5
                                }}
                            />
                        </div>
                        <div className="pb-4">
                            <QuestionCard 
                                tags={["Workout","Chest"]}
                                question={{
                                    title: "Bagaimana cara Push Up",
                                    desc: `Asli susah banget mau push up aja tu
                                    Kyk gimana caranya soalnya susah bgt dorong badan keatas
                                    Mungkina da yang bisa jawab`,
                                    user: "Jacelyn Felisha",
                                    time: new Date("September 17, 2021 15:27:00"),
                                    helpful: 20,
                                    answers: 5
                                }}
                            />
                        </div>
                        <div className="pb-4">
                            <QuestionCard 
                                tags={["Workout","Chest"]}
                                question={{
                                    title: "Bagaimana cara Push Up",
                                    desc: `Asli susah banget mau push up aja tu
                                    Kyk gimana caranya soalnya susah bgt dorong badan keatas
                                    Mungkina da yang bisa jawab`,
                                    user: "Jacelyn Felisha",
                                    time: new Date("September 17, 2021 15:27:00"),
                                    helpful: 20,
                                    answers: 5
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nest
