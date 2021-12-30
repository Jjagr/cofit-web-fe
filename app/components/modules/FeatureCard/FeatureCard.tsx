import React, { useState } from "react";
import styles from "./FeatureCard.module.css";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Button from "@element/Button/Button";

type Props = {
  image: string;
  title: string;
  caption: React.ReactNode;
  alignText: 'left' | 'right';
};

const FeatureCard = ({
  title,
  caption,
  image,
  alignText,
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  const leftAlign: boolean = alignText==='left';

  return (
    <div className={`${styles.cardContainer} flex-col-reverse ${leftAlign ? "xl:flex-row" : "xl:flex-row-reverse"}`}>
      <div className={`${styles.cardText} ${leftAlign ? "xl:text-left" : "xl:text-right"} text-center`}>
        <p className={`${styles.cardTitle}`}>{title}</p>
        <div className={`${styles.cardCaption} xl:mb-8`}>
          {caption}
        </div>
        <Button
          color="none"
          className="xl:w-[235px] bg-orange-gradient text-primary-50 font-bold xs:rounded-24"
          onClick={() => {}}
          rounded="rounded-24"
        >Yuk Coba Sekarang!</Button>
      </div>
      <div className={`${styles.cardImg}`}>
        <Image 
          src={image}
          alt="feature"
          width={454}
          height={320}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
