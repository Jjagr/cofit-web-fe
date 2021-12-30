import type { NextPage } from "next";
import styles from "./Home.module.css";
import { FEATURE } from "@constant/index";
import { useWindowSize } from '@util/WindowSize'
import Video from "@element/Video/Video";
import FeatureCard from "@module/FeatureCard/FeatureCard";
import FeatureFitNestCard from '@module/FeatureFitNestCard/FeatureFitNestCard';
import IntroSlogan from '@module/IntroSlogan/IntroSlogan';
import IntroFact from '@module/IntroFact/IntroFact';
import SubscribeCard from "@module/SubscribeCard/SubscribeCard";

const Home: NextPage = () => {
  const { height, width } = useWindowSize();

  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.videoContainer}>
        <IntroSlogan />
        <Video
          overlay
          link={"assets/video/cofit-intro.mp4"}
          autoPlay
          style={"h-screen w-screen"}
          videoStyle={styles.videoStyle}
        />
      </div>
      <IntroFact />

      <div className={styles.introVision}>
        COFIT exists to make
        more people <span className={styles.bold}>understand </span>
        about healthy lifestyle
      </div>

      <div className={styles.featureFitNestContainer}>
        <FeatureFitNestCard />
      </div>

      <div className={styles.introVision}>
        and <span className={styles.bold}>implement</span> it
      </div> */}

      {/* Feature Section */}
      {/* <div className={"flex flex-col"}>
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

      <SubscribeCard /> */}
    </div>
  );
};

export default Home;
