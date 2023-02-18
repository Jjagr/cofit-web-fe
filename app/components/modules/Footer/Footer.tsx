import { LINKS } from "@constant/index";
import IconText from "@element/IconText/IconText";
import Image from "next/image";
import Link from "next/link";
import ReactTooltip from "react-tooltip";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="kontak">
      <div className={styles.mainContainer}>
        <div className={`flex flex-col items-start`}>
          <Image
            src={"/assets/icon/full-logo.svg"}
            alt={""}
            height={56}
            width={189}
          />
          <p className="mt-8">Copyright © 2022 Groofit. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold mb-5">Informasi</div>
          <Link href={"/"} passHref={true}>
            <div className={styles.clickableFooter}>Tentang kami</div>
          </Link>
          <Link href={"/#fitur"} passHref={true}>
            <div className={styles.clickableFooter}>Fitur</div>
          </Link>
          <Link href={"/#testimoni"} passHref={true}>
            <div className={styles.clickableFooter}>Testimoni</div>
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold mb-5">Legal</div>
          <Link href={"/pp"} passHref={true}>
            <div className={styles.clickableFooter}>Privacy Policy</div>
          </Link>
          <Link href={"/tou"} passHref={true}>
            <div className={styles.clickableFooter}>Terms of Use</div>
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold mb-5">Hubungi kami</div>
          <a href={LINKS.gmail} target="_blank" rel="noreferrer">
            <IconText
              className={styles.clickableFooter}
              icon={
                <Image
                  src="/assets/icon/email.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              iconHover={
                <Image
                  src="/assets/icon/email-gradient.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              text="jjagrteam@gmail.com"
            />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer">
            <IconText
              className={styles.clickableFooter}
              icon={
                <Image
                  src="/assets/icon/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              iconHover={
                <Image
                  src="/assets/icon/instagram-gradient.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              text="@groofit.id"
            />
          </a>
          <a href={LINKS.youtube} target="_blank" rel="noreferrer">
            <IconText
              className={styles.clickableFooter}
              icon={
                <Image
                  src="/assets/icon/youtube.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              iconHover={
                <Image
                  src="/assets/icon/youtube-gradient.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              text="Groofit"
            />
          </a>
        </div>
        {/* <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold">
            Unduh
            <span className="bg-orange-red-gradient text-transparent bg-clip-text">
              {" "}
              Groofit
            </span>
          </div>
          <Image
            src={"/image/qr-code.svg"}
            className="object-cover shadow-xl"
            alt={""}
            height={90}
            width={90}
          />
        </div> */}
      </div>
      <div className={styles.mobileMainContainer}>
        <Image
          src={"/assets/icon/full-logo.svg"}
          alt={""}
          height={56}
          width={189}
        />
        <div className="flex flex-row justify-between w-full mt-16">
          <div className="flex flex-col items-start">
            <div className="text-h4 font-bold md:font-semibold mb-3 md:mb-5">
              Informasi
            </div>
            <Link href={"/"} passHref={true}>
              <div className={styles.clickableFooter}>Tentang kami</div>
            </Link>
            <Link href={"/#fitur"} passHref={true}>
              <div className={styles.clickableFooter}>Fitur</div>
            </Link>
            <Link href={"/#testimoni"} passHref={true}>
              <div className={styles.clickableFooter}>Testimoni</div>
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-h4 font-semibold mb-3 md:mb-5">Legal</div>
            <Link href={"/pp"} passHref={true}>
              <div className={styles.clickableFooter}>Privacy Policy</div>
            </Link>
            <Link href={"/tou"} passHref={true}>
              <div className={styles.clickableFooter}>Term of Use</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold mb-3 mt-8 md:mb-5 md:mt-0">
            Hubungi kami
          </div>
          <a href={LINKS.gmail} target="_blank" rel="noreferrer">
            <IconText
              className={styles.clickableFooter}
              icon={
                <Image
                  src="/assets/icon/email.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              iconHover={
                <Image
                  src="/assets/icon/email-gradient.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              text="jjagrteam@gmail.com"
            />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noreferrer">
            <IconText
              className={styles.clickableFooter}
              icon={
                <Image
                  src="/assets/icon/instagram.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              iconHover={
                <Image
                  src="/assets/icon/instagram-gradient.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              text="@groofit.id"
            />
          </a>
          <a href={LINKS.youtube} target="_blank" rel="noreferrer">
            <IconText
              className={styles.clickableFooter}
              icon={
                <Image
                  src="/assets/icon/youtube.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              iconHover={
                <Image
                  src="/assets/icon/youtube-gradient.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              text="Groofit"
            />
          </a>
        </div>
        {/* <div className="flex flex-col items-start mt-16">
          <div className="text-h4 font-bold md:font-semibold">
            Unduh
            <span className="bg-orange-red-gradient text-transparent bg-clip-text">
              {" "}
              Groofit
            </span>
          </div>
          <a
            href={LINKS.playstore}
            data-tip
            data-for="footer"
            target="_blank"
            rel="noreferrer"
            className="mt-4"
          >
            <Image
              src={"/assets/vector/playstore.svg"}
              alt={""}
              height={60}
              width={200}
            />
          </a>
          <ReactTooltip id="footer" place="bottom" type="warning"  effect="solid">Coming soon on iOS</ReactTooltip>
        </div> */}
        <p className="mt-16 text-sm">
          Copyright © 2022 Groofit. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
