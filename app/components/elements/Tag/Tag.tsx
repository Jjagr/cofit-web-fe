import styles from './Tag.module.css'

export enum TagColor {
    ORANGE="bg-secondary-orange",
    YELLOW="bg-secondary-yellow"
}

type Props = {
    text: string
    color: TagColor
}

const Tag = ({text, color}: Props) => {
    return (
        <div className={[styles.tag,color].join(" ")} >
            {text}
        </div>
    )
}

export default Tag;
