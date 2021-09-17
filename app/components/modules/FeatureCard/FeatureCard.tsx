import styles from "./FeatureCard.module.css";
import Image from "next/image";
import 'tailwindcss/tailwind.css'

type Props = {
  image: string;
  link: string;
  title: string;
  subtitle: string;
};

const FeatureCard = ({ link, title, subtitle, image }: Props) => {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.image}>
        <Image alt={title} src={image} width={"500px"} height={"340px"} />
      </div>
      <div className="text-h2 font-bold">{title}</div>
      <div className="text-body2 font-semibold">{subtitle}</div>
    </a>
  );
};

export default FeatureCard;
