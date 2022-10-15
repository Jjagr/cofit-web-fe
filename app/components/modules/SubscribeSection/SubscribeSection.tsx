import BodyText from "@element/BodyText/BodyText";
import Button from "@element/Button/Button";
import HeadText from "@element/HeadText/HeadText";
import InputBar from "@module/InputBar/InputBar";
import CustomCountdown from "@module/CustomCountdown/CustomCountdown";
import { Align, Presets, Weight } from "types/TextStyles";
import styles from "./SubscribeSection.module.css";
import { LINKS } from "@constant/index";
import Image from "next/image";

const SubscribeSection = (props: any) => {
  const USER_COUNT: number = 12;
  const MAX_USER_COUNT: number = 150;

  return (
    <section className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <HeadText
          preset={Presets.Heading2}
          text="Daftar pre-launch Groofit dan jadilah early-user kami!"
          weight={Weight.Bold}
          align={Align.Left}
        />

        <BodyText
          preset={Presets.Body1}
          text="Jadilah 1000 orang pertama yang mendaftar untuk mendapatkan akses pertama pada aplikasi Groofit dan reward berupa early-user badge pada akun Groofitmu."
          weight={Weight.Normal}
          align={Align.Left}
        />

        <div className={styles.row}>
          <HeadText
            preset={Presets.Heading2}
            text={USER_COUNT.toString()}
            weight={Weight.Bold}
            align={Align.Left}
          />

          <div className="text-primary-400 h-[min-content]">
            <BodyText
              preset={Presets.Body1}
              text={`/${MAX_USER_COUNT} orang telah mendaftar`}
              weight={Weight.Normal}
            />
          </div>
        </div>
  
        <div className={styles.row + " gap-3"}>
          <InputBar
            width="w-full h-[min-content]"
            inline={false}
            shadow={false}
            placeholder="Masukkan emailmu disini"
            backgroundColor="bg-primary-50"
          />

          <Button
            color="white"
            className="px-8 bg-orange-gradient text-primary-50 font-bold xs:rounded-24"
            onClick={() => {}}
            rounded="rounded-24"
          >Daftar</Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center pr-[100px]">
        <HeadText
          preset={Presets.Heading4}
          text="Groofit hadir dalam"
        />
        
        <CustomCountdown/>

        <a
          href={LINKS.playstore}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer">
          <Image
            src={"/assets/vector/playstore.svg"}
            alt={""}
            height={60}
            width={200}
          />
        </a>
      </div>
    </section>
  );
};

export default SubscribeSection;
