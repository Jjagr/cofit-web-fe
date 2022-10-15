import BodyText from "@element/BodyText/BodyText";
import Button from "@element/Button/Button";
import HeadText from "@element/HeadText/HeadText";
import InputBar from "@module/InputBar/InputBar";
import CustomCountdown from "@module/CustomCountdown/CustomCountdown";
import { Align, Presets, Weight } from "types/TextStyles";
import styles from "./SubscribeSection.module.css";
import { LINKS } from "@constant/index";
import { useRef } from 'react'
import Image from "next/image";
import ReactTooltip from "react-tooltip";

const SubscribeSection = (props: any) => {
  const USER_COUNT: number = 19;
  const MAX_USER_COUNT: number = 150;

  const inputEmail = useRef(null);
  const API_URL = 'https://api.groo.fit'

  const postEmail = () => {
    if (inputEmail.current !== undefined && inputEmail.current !== null && inputEmail.current['value'] !== '') {
      fetch(`${API_URL}/firstusers/add`, {
        method: "POST",
        body: JSON.stringify({
          email: inputEmail.current['value']
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => alert("Thank you so much! Can't wait when you tried our product"))
    }
  }

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
          text="Jadilah 150 orang pertama yang mendaftar untuk mendapatkan akses pertama pada aplikasi Groofit dan reward berupa early-user badge pada akun Groofitmu."
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

        <div className={styles.inputEmail + " gap-3"}>
          <InputBar
            inputRef={inputEmail}
            width="w-full h-[min-content]"
            inline={false}
            shadow={false}
            placeholder="Masukkan emailmu disini"
            backgroundColor="bg-primary-50"
          />

          <Button
            color="white"
            className="px-8 bg-orange-gradient text-primary-50 font-bold xs:rounded-24"
            onClick={postEmail}
            rounded="rounded-24"
          >Daftar</Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <div className="xl:mt-0 mt-16">
          <HeadText
            preset={Presets.Heading4}
            text="Groofit hadir dalam"
          />
        </div>

        <CustomCountdown />

        <a
          href={LINKS.playstore}
          data-tip
          data-for="subs"
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
        <ReactTooltip id="subs" place="bottom" type="warning" effect="solid">Coming soon on iOS</ReactTooltip>
      </div>
    </section>
  );
};

export default SubscribeSection;
