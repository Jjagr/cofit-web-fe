import styles from "./NavOver.module.css";
import Footer from "@module/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import TopNav from "@module/TopNav/TopNav";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const NavOver = ({ children }: Props) => {
  const [clearNavbar, setClearNavbar] = useState(true);
  let listener: any = useRef();

  const router = useRouter();

  useEffect(() => {
    listener.current = document.addEventListener("scroll", (e) => {
      var scrolled: any = document.scrollingElement?.scrollTop;
      if (scrolled >= 100) {
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
      <TopNav
        bg={
          clearNavbar
            ? router.pathname == "/legal"
              ? "gradient"
              : "transparent"
            : "white"
        }
      />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default NavOver;
