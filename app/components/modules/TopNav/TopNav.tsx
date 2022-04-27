import styles from "./TopNav.module.css";
import NavItem from "@element/NavItem/NavItem";
import Image from "next/image";

type Props = {
  bg: "transparent" | "white";
};

const TopNav = ({ bg }: Props) => {
  return (
    <>
      <div className="xl:hidden relative top-0">
        <div
          className={`absolute bg-no-repeat object-contain top-0 left-0 ${styles.waveTop}`}
        ></div>
        <div className={`absolute bg-no-repeat bg-contain object-contain z-10 top-8 left-8`}>
          <Image
            src={"/assets/icon/full-logo.svg"}
            alt={""}
            height={32}
            width={110}
          />
        </div>
      </div>
      <div className="hidden xl:block relative">
        <div
          className={styles.waveTop}
        />
        <div className={bg === "transparent" ? styles.navDesktopContainer : styles.navDesktopContainerWhite}>
          <div
            className={`bg-no-repeat object-contain bg-contain`}
            style={{
              backgroundImage: `url(../../../assets/icon/full-logo.svg)`,
              height: "50px",
              width: "200px",
            }}
          />
          <div className={styles.navItemDesktop}>
            <NavItem href="#" label="Tentang Kami" />
            <NavItem href="#fitur" label="Fitur" />
            <NavItem href="#testimoni" label="Testimoni" />
            <NavItem href="#kontak" label="Kontak" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
