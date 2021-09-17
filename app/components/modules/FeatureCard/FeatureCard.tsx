import styles from "./FeatureCard.module.css";
import Image from "next/image";
import "tailwindcss/tailwind.css";

import { useState } from "react";

type Props = {
  image: string;
  link: string;
  title: string;
  subtitle: string;
  width: string;
  height: number;
};

const FeatureCard = ({
  link,
  title,
  subtitle,
  image,
  width,
  height,
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={`mb-20 ${styles.card}`} style={{ width: width }}>
      <a
        href={link}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={"relative"}>
          {isHover && (
            <div className={`absolute z-10 ${styles.fadeInImage}`}>
              <div
                className={`text-h3 font-bold text-primary-50 flex items-center justify-center ${styles.overlay}`}
                style={{
                  height: height,
                  width: width,
                }}
              >
                Coming Soon
              </div>
            </div>
          )}
          <div className={styles.imageContainer}>
            <Image
              alt={title}
              src={image}
              width={width}
              height={height}
              className={styles.image}
            />
          </div>
        </div>
        <div className="text-h2 font-bold">{title}</div>
        <div className="text-body2 font-semibold">{subtitle}</div>
      </a>
    </div>
  );
};

export default FeatureCard;
