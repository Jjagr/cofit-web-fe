import styles from './NestDetail.module.css';
import { Align, Presets, Weight } from 'types/TextStyles';
import Image from 'next/image';
import HeadText from '@element/HeadText/HeadText';
import IconText from '@element/IconText/IconText';
import BodyText from '@element/BodyText/BodyText';
import Tag, { TagColor } from '@element/Tag/Tag';
import InputBar from '@module/InputBar/InputBar';
import ActivityCard from '@module/ActivityCard/ActivityCard';
import ProfileSrc, { PostType } from '@module/ProfileSrc/ProfileSrc';
import { ACTIVITIES } from '@constant/index';

type Props = {
    data: any
}

const NestDetail = ({data}:Props) => {
    // const { tags, question } = data;

    return data ? (
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
                <div className={`flex flex-col ${styles.suggestion} lg:pr-16 lg:block hidden`}>
                    <HeadText
                        preset={Presets.Heading6}
                        align={Align.Left}
                        text="Suggested Activities"
                    />
                    <div className="flex lg:flex-col flex-row">
                        {
                            ACTIVITIES.slice(0,2).map((val,idx) => (
                                <div key={idx} className="lg:py-2 pr-3">
                                    <ActivityCard 
                                    
                                        imgSrc='/image/eat.png'
                                        activity={val}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={`flex flex-col ${styles.content}`}>
                    <HeadText
                        preset={Presets.Heading4}
                        align={Align.Left}
                        text={data.question.title}
                    />
                    <div className="lg:h-4 h-2" />
                    <BodyText
                        preset={Presets.Body1}
                        align={Align.Left}
                        weight={Weight.Normal}
                        text={data.question.desc}
                    />
                    <div className="lg:h-6 h-3" />
                    <div className="flex flex-row">
                    {
                        data.tags.map((tag: string, idx: number) => (
                            <div key={idx} className="pr-1">
                                <Tag
                                    text={tag}
                                    color={TagColor.ORANGE}
                                />
                            </div>
                        ))
                    }
                    </div>
                    <div className="lg:h-6 h-3" />
                    <div className={styles.question}>
                        <div className="flex flex-row justify-between">
                            <ProfileSrc
                                time={data.question.time}
                                postType={PostType.QUESTION}
                                profile={data.question.user}
                                icon={true}
                            />
                            <div className="flex flex-row text-body3">
                                <div className={`${styles.helpfuldesc} flex flex-row`}>
                                    <IconText
                                        text={data.question.helpful}
                                        icon={<Image 
                                            src="/assets/icon/thumb-up-24.svg"
                                            alt="comment"
                                            width={20}
                                            height={20}
                                            />}
                                            color="text-primary-500"
                                    />
                                </div>
                                <div className="w-3" />
                                <div className={`flex flex-row`}>
                                    <IconText
                                        text={"Share"}
                                        icon={<Image 
                                            src="/assets/icon/share-24.svg"
                                            alt="helpful"
                                            width={20}
                                            height={20}
                                        />}
                                        color="text-primary-500"
                                    />
                                </div>
                                <div className="w-3" />
                                <div className={`flex flex-row`}>
                                    <IconText
                                        text={"Report"}
                                        icon={<Image 
                                            src="/assets/icon/flag-24.svg"
                                            alt="helpful"
                                            width={20}
                                            height={20}
                                        />}
                                        color="text-primary-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.comment}>
                            Add a comment..
                        </div>
                    </div>
                    <div className={styles.answers}>
                        <HeadText 
                            preset={Presets.Heading6}
                            align={Align.Left}
                            text={`${data.question.answers} Answers`}
                        />
                        <div className="h-4" />
                        <BodyText
                            preset={Presets.Body1}
                            align={Align.Left}
                            weight={Weight.Normal}
                            text={data.answer}
                        />
                        <div className="h-6" />
                        <div className="flex flex-row">
                        {
                            data.tags.map((tag: string, idx: number) => (
                                <div key={idx} className="pr-1">
                                    <Tag
                                        text={tag}
                                        color={TagColor.ORANGE}
                                    />
                                </div>
                            ))
                        }
                        </div>
                        <div className="h-6" />
                        <div className="flex flex-row justify-between">
                            <ProfileSrc
                                time={"2021-09-17T14:00:00.000Z"}
                                postType={PostType.ANSWER}
                                profile={"Renaldi Arlin"}
                                icon={true}
                            />
                            <div className="flex flex-row text-body3">
                                <div className={`${styles.helpfuldesc} flex flex-row`}>
                                    <IconText
                                        text={"10"}
                                        icon={<Image 
                                            src="/assets/icon/thumb-up-24.svg"
                                            alt="comment"
                                            width={20}
                                            height={20}
                                            />}
                                            color="text-primary-500"
                                    />
                                </div>
                                <div className="w-3" />
                                <div className={`flex flex-row`}>
                                    <IconText
                                        text={"Share"}
                                        icon={<Image 
                                            src="/assets/icon/share-24.svg"
                                            alt="helpful"
                                            width={20}
                                            height={20}
                                        />}
                                        color="text-primary-500"
                                    />
                                </div>
                                <div className="w-3" />
                                <div className={`flex flex-row`}>
                                    <IconText
                                        text={"Report"}
                                        icon={<Image 
                                            src="/assets/icon/flag-24.svg"
                                            alt="helpful"
                                            width={20}
                                            height={20}
                                        />}
                                        color="text-primary-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.comment}>
                            Add a comment..
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <div></div>;
}

export default NestDetail;
