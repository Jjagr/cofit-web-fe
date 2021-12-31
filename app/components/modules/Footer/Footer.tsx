import IconText from "@element/IconText/IconText";
import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="kontak" className={styles.mainContainer}>
      <div className={`flex flex-col items-start`}>
        <Image
          src={"/assets/icon/full-logo.svg"}
          alt={""}
          height={56}
          width={189}
        />
        <p className="mt-8">Copyright © 2021 COFIT. All rights reserved.</p>
      </div>
      <div className="xl:flex flex-col items-start hidden">
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
      <div className="xl:flex flex-col items-start hidden">
        <div className="text-h4 font-semibold mb-5">Hubungi kami</div>
        <IconText
          className={styles.clickableFooter}
          icon={
            <Image src="/assets/icon/email.svg" alt="" width={24} height={24} />
          }
          text="jjagrteam@gmail.com"
        />
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
          text="@cofit.app"
        />
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
          text="COFIT"
        />
      </div>
      <div className="xl:flex flex-col items-start hidden">
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
  );
};

export default Footer;
