import { useState } from "react";
import styles from "./TopNav.module.css";
import NavItem from "@element/NavItem/NavItem";
import Image from "next/image";

type Props = {
  bg: "transparent" | "white";
};

const TopNav = ({ bg }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div className="xl:hidden relative top-0 container">
        <div
          className={`absolute bg-no-repeat object-contain top-0 left-0 ${styles.waveTop}`}
        ></div>
        <div className={`fixed bg-no-repeat object-contain z-10 top-8 left-8`}>
          <Image
            src={"/assets/icon/full-logo.svg"}
            alt={""}
            height={32}
            width={110}
          />
        </div>
      </div>
      <div className="hidden xl:block relative container">
        <div
          className={`bg-no-repeat object-contain absolute w-full ${styles.waveTop}`}
        ></div>
        <div
          className={`hidden fixed top-0 z-50 xl:flex w-full container justify-between xl:px-24 py-12`}
        >
          <div
            className={` bg-no-repeat object-contain`}
            style={{
              backgroundImage: `url(../../../assets/icon/full-logo.svg)`,
              height: "50px",
              width: "200px",
            }}
          ></div>
          <div
            className={`${styles.navItemDesktop} text-primary-50 font-semibold text-xl`}
          >
            <NavItem href="#" label="Tentang Kami" />
            <NavItem href="#" label="Fitur" />
            <NavItem href="#" label="Testimoni" />
            <NavItem href="#" label="Kontak" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
