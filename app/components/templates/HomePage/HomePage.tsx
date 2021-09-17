import type { NextPage } from "next";
import { Presets, Align, Weight } from "types/TextStyles";
import HeadText from "@element/HeadText/HeadText";
import BodyText from "@element/BodyText/BodyText";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.css";
import Video from "@element/Video/Video";
import ReactPlayer from "react-player";
import { FEATURE } from "@constant";
import FeatureCard from "@module/FeatureCard/FeatureCard";

import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

const Home: NextPage = () => {
  const { height, width } = useWindowSize();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <Video
          overlay
          link={"assets/video/cofit-intro.mp4"}
          autoPlay
          style={"h-screen w-screen"}
          videoStyle={styles.videoStyle}
        />
      </div>
      <div className={"my-24 text-h1 text-center"}>
        {" "}
        and <b>implement</b> it{" "}
      </div>

      {/* Feature Section */}
      <div className={"flex flex-col"}>
        <div
          className={"flex justify-evenly flex-col items-center lg:flex-row "}
        >
          {FEATURE.slice(0, 2).map((item) => {
            return (
              <FeatureCard
                key={item.title}
                link={item.link}
                image={item.image}
                title={item.title}
                subtitle={item.desc}
                width={width > 720 ? "500px" : "300px"}
                height={width > 720 ? 340 : 200}
              />
            );
          })}
        </div>
        <div className="m-auto">
          <FeatureCard
            key={FEATURE[2].title}
            link={FEATURE[2].link}
            image={FEATURE[2].image}
            title={FEATURE[2].title}
            subtitle={FEATURE[2].desc}
            width={width > 720 ? "500px" : "300px"}
            height={width > 720 ? 340 : 200}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
