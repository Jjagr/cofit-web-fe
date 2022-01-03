import { LINKS } from "@constant/index";
import IconText from "@element/IconText/IconText";
import Image from "next/image";

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
          <p className="mt-8">Copyright © 2021 COFIT. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold mb-5">Informasi</div>
          <a href="#" className={styles.clickableFooter}>
            Tentang kami
          </a>
          <a href="#fitur" className={styles.clickableFooter}>
            Fitur
          </a>
          <a href="#testimoni" className={styles.clickableFooter}>
            Testimoni
          </a>
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
              text="@cofit.app"
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
              text="COFIT"
            />
          </a>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-h4 font-semibold">
            Unduh
            <span className="bg-orange-red-gradient text-transparent bg-clip-text">
              {" "}
              COFIT App
            </span>
          </div>
          <Image
            src={"/image/qr-code.png"}
            className="-ml-4"
            alt={""}
            height={120}
            width={120}
          />
        </div>
      </div>
      <div className={styles.mobileMainContainer}>
        <Image
          src={"/assets/icon/full-logo.svg"}
          alt={""}
          height={56}
          width={189}
        />
        <div className="flex flex-row justify-evenly w-full mt-16">
          <div className="flex flex-col items-start">
            <div className="text-h4 font-semibold mb-5">Informasi</div>
            <a href="#" className={styles.clickableFooter}>
              Tentang kami
            </a>
            <a href="#fitur" className={styles.clickableFooter}>
              Fitur
            </a>
            <a href="#testimoni" className={styles.clickableFooter}>
              Testimoni
            </a>
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
                text="@cofit.app"
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
                text="COFIT"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <div className="text-h4 font-semibold">
            Unduh
            <span className="bg-orange-red-gradient text-transparent bg-clip-text">
              {" "}
              COFIT App
            </span>
          </div>
          <a
            href={LINKS.playstore}
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
        </div>
        <p className="mt-16 text-sm">Copyright © 2021 COFIT. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
