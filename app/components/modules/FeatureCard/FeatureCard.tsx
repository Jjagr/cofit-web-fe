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
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
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
        <div className="lg:text-h2 md:text-h3 text-h4 font-bold lg:my-0 my-6">{title}</div>
        <div className="lg:text-body2 md:text-body3 text-body4 font-semibold">{subtitle}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
