import styles from './ActivityCard.module.css';
import { Presets, Align } from 'types/TextStyles';
import { ActType } from 'types/Activity';
import Image from 'next/image';
import Tag, {TagColor} from '@element/Tag/Tag';
import IconText from '@element/IconText/IconText';
import HeadText from '@element/HeadText/HeadText';
import ProfileSrc, {PostType} from '@module/ProfileSrc/ProfileSrc';

type Props = {
    imgSrc?: string
    width?: number
    href?: string
    activity?: any
}

const ActivityCard = ({ imgSrc, width, href, activity }: Props) => {
    return (
        <div 
            className={styles.activitycard} 
            style={{backgroundImage: `url(${imgSrc ? imgSrc : '/image/eat.png'})`}}
        >
            <div className={styles.overlay}>
                <div className="flex flex-row-reverse">
                    <IconText 
                        text={activity.comment}
                        icon={<Image 
                            src="/assets/icon/chat-alt-2.svg"
                            alt="comment"
                            width={20}
                            height={20}
                        />}
                        color="text-primary-50"
                    />
                    <div className="w-3" />
                    <IconText
                        text={activity.helpful}
                        icon={<Image 
                            src="/assets/icon/thumb-up.svg"
                            alt="helpful"
                            width={20}
                            height={20}
                        />}
                        color="text-primary-50"
                    />
                </div>
                <div className="text-primary-50 pb-2">
                    <ProfileSrc 
                        profile={activity.user}
                        time={activity.time}
                        icon={false}
                        postType={PostType.POST}
                    />
                </div>
                <div className="text-primary-50 pb-1">
                    <HeadText 
                        preset={Presets.Heading6}
                        text={activity.title}
                        align={Align.Left}
                    />
                </div>
                <div className="pb-1">
                    <Tag 
                        text="Tag"
                        color={activity.type===ActType.MealPlan 
                            ? TagColor.ORANGE
                            : TagColor.YELLOW
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default ActivityCard
