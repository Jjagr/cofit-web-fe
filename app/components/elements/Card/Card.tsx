import styles from './Card.module.css';

type Props = {
    link: string,
    title: string,
    subtitle: string
}

const Card = ({link, title, subtitle} : Props) => {
    return (
        <a href={link} className={styles.card}>
            <h2>{title} &rarr;</h2>
            <p>{subtitle}</p>
        </a>
    )
}

export default Card;
