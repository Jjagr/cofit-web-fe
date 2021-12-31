import styles from "./NavOver.module.css";
import Footer from "@module/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import TopNav from "@module/TopNav/TopNav";

type Props = {
  children: React.ReactNode;
};

const NavOver = ({ children }: Props) => {
  const [clearNavbar, setClearNavbar] = useState(true);
  let listener: any = useRef();

  useEffect(() => {
    listener.current = document.addEventListener("scroll", (e) => {
      var scrolled: any = document.scrollingElement?.scrollTop;
      if (scrolled >= 200) {
        setClearNavbar(false);
      } else {
        setClearNavbar(true);
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className="relative h-screen mx-auto">
      <TopNav bg={clearNavbar ? "transparent" : "white"} />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default NavOver;
