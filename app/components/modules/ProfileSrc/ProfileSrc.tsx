import styles from './ProfileSrc.module.css';
import countTimePassed from '@util/Time';

export enum PostType {
    POST=0,
    QUESTION=1,
    ANSWER=2
}

type Props = {
    profile?: string
    icon?: boolean
    time: string
    postType: PostType
}

const ProfileSrc = ({profile, icon, postType, time}: Props) => {
    return (
        <div className="flex flex-row items-center text-body4 font-regular">
            {icon && <div className={styles.circle} />}
            <p>{postType===PostType.POST ? "Posted" : postType===PostType.QUESTION ? "Asked" : "Answered"}{" "}
                {countTimePassed(time)} by <span className="font-medium">{profile}</span>
            </p>
        </div>
    )
}

export default ProfileSrc;
