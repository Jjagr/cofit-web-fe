import styles from './Tag.module.css'

export enum TagColor {
    ORANGE="bg-secondary-orange",
    YELLOW="bg-secondary-yellow",
    GRAY="bg-primary-200",
}

type Props = {
    text: string
    color: TagColor
}

const Tag = ({text, color}: Props) => {
    return (
        <div className={`${styles.tag} ${color} ${color===TagColor.GRAY?"text-primary-500":"text-primary-50"}`} >
            {text}
        </div>
    )
}

export default Tag;
