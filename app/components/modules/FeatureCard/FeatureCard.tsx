import React from "react";
import styles from "./FeatureCard.module.css";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Button from "@element/Button/Button";
import Tag, { TagColor } from "@element/Tag/Tag";

type Props = {
  image: string;
  title: string;
  caption: React.ReactNode;
  alignText: 'left' | 'right';
  comingSoon?: boolean;
};

const FeatureCard = ({
  title,
  caption,
  image,
  alignText,
  comingSoon,
}: Props) => {
  const leftAlign: boolean = alignText==='left';

  return (
    <div className={`${styles.cardContainer} flex-col-reverse ${leftAlign ? "xl:flex-row" : "xl:flex-row-reverse"}`}>
      <div className={`${styles.cardText} flex flex-col ${leftAlign ? "xl:items-start xl:text-left" : "xl:items-end xl:text-right"} items-center text-center`}>
        {comingSoon && <Tag
          text="Segera hadir"
          color={TagColor.ORANGE}
        />}
        <p className={`mt-3 xl:mt-6 ${styles.cardTitle}`}>{title}</p>
        <div className={`${styles.cardCaption} xl:mb-8`}>
          {caption}
        </div>
        <Button
          color="white"
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
