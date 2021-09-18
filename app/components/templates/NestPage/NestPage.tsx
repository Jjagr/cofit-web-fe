import styles from './Nest.module.css';
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { Presets, Align } from 'types/TextStyles'
import { ACTIVITIES, QUESTIONS } from '@constant/index';
import Button from '@element/Button/Button';
import HeadText from '@element/HeadText/HeadText';
import Tag, { TagColor } from '@element/Tag/Tag';
import InputBar from '@module/InputBar/InputBar';
import List from '@module/List/List';
import ActivityCard from '@module/ActivityCard/ActivityCard';
import QuestionCard from '@module/QuestionCard/QuestionCard';

const Nest: NextPage = () => {
    const router = useRouter();

    const clickHanlder = (id) => {
        router.push(`nest/${id}`);
    }

    return (
        <div>
            <InputBar
                password={false}
                inline={false}
                width="w-full"
                shadow={false}
                placeholder='Ask anything "Cara kurus gimana?"'
                onchange={()=>{}}
            />
            <div className="flex lg:flex-row justify-center flex-col pt-10">
                <div className={`flex flex-col ${styles.filter} lg:pr-16`}>
                    <div>
                        <HeadText
                            preset={Presets.Heading6}
                            align={Align.Left}
                            text="Sort By"
                        />
                        <div className="flex flex-row pt-2">
                            <Tag
                                text="Newest"
                                color={TagColor.GRAY}
                            />
                            <div className="w-1" />
                            <Tag
                                text="Helpful"
                                color={TagColor.ORANGE}
                            />
                        </div>
                    </div>
                    <div className="pt-6">
                        <List
                            head="By Content"
                            items={["All","Questions","Activities"]}
                            checkbox={false}
                        />
                    </div>
                    <div className="pt-6">
                        <List
                            head="Tag"
                            items={["Workout","Exercise","Meal Plan","Meal","Ingredient"]}
                            checkbox={true}
                            name="tag"
                        />
                    </div>
                </div>
                <div className={`flex flex-col ${styles.content}`}>
                    <div className={`flex flex-row items-center overflow-x-auto justify-between`}>
                    {
                        ACTIVITIES.slice(0,3).map((val,idx) => (
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
                        {
                            QUESTIONS.map(({question, tags},idx) => (
                                <div key={idx} className="mb-4 cursor-pointer" onClick={()=>clickHanlder(idx)}>
                                    <QuestionCard 
                                        tags={tags}
                                        question={question}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nest
