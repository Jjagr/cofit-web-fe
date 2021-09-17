import Image from 'next/image';
import styles from './QuestionCard.module.css';
import { Presets, Align, Weight } from 'types/TextStyles';
import Tag, {TagColor} from '@element/Tag/Tag';
import HeadText from '@element/HeadText/HeadText';
import BodyText from '@element/BodyText/BodyText';
import IconText from '@element/IconText/IconText'
import ProfileSrc, {PostType} from '@module/ProfileSrc/ProfileSrc';

type Props = {
    tags?: Array<string>
    question?: any
}

const QuestionCard = ({tags, question}: Props) => {
    return (
        <div className={`${styles.questioncard}`}>
            <div className="flex justify-between">
                <HeadText 
                    text={question.title}
                    preset={Presets.Heading5}
                    align={Align.Left}
                />
                <Image 
                    src="/assets/icon/3-dots.svg"
                    alt="setting"
                    width={20}
                    height={20}
                />
            </div>
            <div className="pt-2 md:block hidden h-20 max-h-20 overflow-hidden">
                <BodyText
                    text={question.desc}
                    preset={Presets.Body2}
                    weight={Weight.Normal}
                    align={Align.Left}
                />
            </div>
            <div className="flex flex-row justify-items-start pt-2 lg:pt-4">
                {tags?.map((tag, idx) => (
                    <div className="pr-3" key={idx}>
                        <Tag
                            text={tag}
                            color={TagColor.YELLOW}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between pt-2 lg:pt-4">
                <ProfileSrc
                    profile={question.user}
                    icon={true}
                    time={new Date("September 15, 2021 07:00:00")}
                    postType={PostType.QUESTION}
                />
                <div className="flex flex-row">
                    <div className={`${styles.helpfuldesc} flex flex-row`}>
                        <IconText
                            text={question.helpful}
                            icon={<Image 
                                src="/assets/icon/chat-alt-2-gray.svg"
                                alt="comment"
                                width={20}
                                height={20}
                                />}
                                color="text-primary-500"
                        />
                    </div>
                    <div className="w-3" />
                    <div className={`${styles.answerdesc} flex flex-row`}>
                        <IconText
                            text={question.answers}
                            icon={<Image 
                                src="/assets/icon/thumb-up-gray.svg"
                                alt="helpful"
                                width={20}
                                height={20}
                            />}
                            color="text-primary-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
