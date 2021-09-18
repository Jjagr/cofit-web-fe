import styles from './Nest.module.css';
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react';
import { Presets, Align } from 'types/TextStyles'
import { ACTIVITIES, QUESTIONS } from '@constant/index';
import { useWindowSize } from '@util/WindowSize'
import Button from '@element/Button/Button';
import HeadText from '@element/HeadText/HeadText';
import Tag, { TagColor } from '@element/Tag/Tag';
import InputBar from '@module/InputBar/InputBar';
import List from '@module/List/List';
import ActivityCard from '@module/ActivityCard/ActivityCard';
import QuestionCard from '@module/QuestionCard/QuestionCard';
import { route } from 'next/dist/server/router';

const Nest: NextPage = () => {
    const askRef = useRef<HTMLInputElement>();
    const router = useRouter();
    const { height, width } = useWindowSize();

    const clickHanlder = (id) => {
        router.push(`nest/${id}`);
    }

    useEffect(() => {
        if (askRef && askRef.current){
            askRef.current.addEventListener("keypress", (e) => {
                if (e.key === 'Enter') {
                    router.push("nest/ask");
                }
            })
        }
    },[])

    return (
        <div>
            <InputBar
                password={false}
                inline={false}
                width="w-full"
                shadow={false}
                placeholder='Ask anything "Cara kurus gimana?"'
                onchange={()=>{}}
                inputRef={askRef}
            />
            <div className="flex md:flex-row justify-center flex-col md:pt-10 pt-2">
                <div className={`flex md:flex-col flex-col-reverse ${styles.filter} lg:pr-16 md:pr-4`}>
                    {width > 768 ? <div>
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
                    : <select className={styles.dropdown}>
                        <option value="" disabled selected hidden>Sort By</option>
                        <option value="new" className="hover:bg-primary-200 bg-primary-100">
                            Newest
                        </option>
                        <option value="help" className="hover:bg-primary-200 bg-primary-100">
                            Helpful
                        </option>
                    </select> 
                    }
                    <div className="md:pt-6">
                        {width > 768 
                        ? <List
                            head="By Content"
                            items={["All","Questions","Activities"]}
                            checkbox={false}
                        />
                        : <div className="flex flex-row">
                            {["All","Questions","Activities"].map((tag,idx) => (
                                <div key={idx} className="pr-4">
                                    <Tag
                                        color={idx===0 ? TagColor.ORANGE : TagColor.GRAY}
                                        text={tag}
                                    />
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                    <div className="pt-6 md:block hidden">
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
                        ACTIVITIES.slice(0,(width>1024 ? 3 : 2)).map((val,idx) => (
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
                            onClick={()=>router.push('move')}
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
