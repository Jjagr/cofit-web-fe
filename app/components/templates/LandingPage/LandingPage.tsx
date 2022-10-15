import type { NextPage } from "next";
import styles from "./Landing.module.css";
import { useWindowSize } from "@util/WindowSize";
import Image from "next/image";
import TestiContainer from "@module/TestiContainer/TestiContainer";
import FeatureCard from "@module/FeatureCard/FeatureCard";
import { FEATURE, LINKS, TESTIMONI } from "@constant/index";
import CardPrestasi from "@element/CardPrestasi/CardPrestasi";
import { motion } from "framer-motion";
import Video from "@element/Video/Video";
import SubscribeSection from "@module/SubscribeSection/SubscribeSection";
import ReactTooltip from 'react-tooltip';

const Landing: NextPage = () => {
  const { height, width } = useWindowSize();

  const variantsRiseUp = {
    onscreen: { opacity: 1, y: 0, x: 0 },
    offscreen: { opacity: 0, y: "100%" },
  };

  const variantsLeftRight = {
    onscreen: { opacity: 1, x: 0 },
    offscreen: { opacity: 0, x: "-100%" },
  };

  const transitionDuration = {
    duration: 1,
  };

  return (
    <>
      <div className={`${styles.mainContainer} hidden xl:block`}>
        <div className="flex flex-row items-center h-[calc(100vh-112px)] mt-28">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsLeftRight}
            transition={transitionDuration}
            className="-mt-28 w-1/2 xl:ml-28 z-10"
          >
            <h1 className="text-h2 2xl:text-h2 text-primary-50 font-semibold mb-6 2xl:mb-0">
              Ingin workout tanpa ribet?
            </h1>
            <p className="w-4/5 text-body1 text-primary-50">
              Sekarang, workout tidak perlu lagi sambil menghitung jumlah
              gerakanmu dan menggapai smartphonemu untuk mengganti gerakan.{" "}
            </p>
            <div className="mt-10 flex">
              <a
                href="#subscribe"
                rel="noreferrer"
                className="cursor-pointer mr-6 py-3 px-8 font-bold text-body1 text-secondary-orange rounded-full bg-primary-50"
              >
                Yuk coba sekarang!
              </a>
              <a
                href="#intro"
                className="mr-6 py-3 px-8 font-bold text-body1 text-primary-50 rounded-full border-2 border-primary-50 flex items-center"
              >
                <p className="mr-2">Lihat video</p>
                <Image
                  src={"/assets/icon/play.svg"}
                  alt={""}
                  height={24}
                  width={24}
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative w-1/2 h-full z-10"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            transition={transitionDuration}
          >
            <Image src={"/image/hero.svg"} alt={""} layout="fill" />
          </motion.div>
        </div>
        <div id="subscribe" className="relative w-screen h-[30vw] -mt-64">
          <Image
            src={"/assets/vector/bottom-web.svg"}
            alt={""}
            layout="fill"
            className={"-z-10"}
          />
        </div>
        <div className="bg-primary-50">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            transition={transitionDuration}>
            <SubscribeSection />
          </motion.div>
        </div>
        <div className="relative w-full bg-primary-50 px-[200px] z-10">
          <motion.div
            className="text-h1 font-bold text-center"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            transition={transitionDuration}
          >
            Visi kami untuk
            <span className={`bg-orange-red-gradient ${styles.textGradient}`}>
              {" "}
              membuat semua orang mengerti
            </span>{" "}
            dan
            <span className={`bg-orange-red-gradient ${styles.textGradient}`}>
              {" "}
              melakukan pola hidup sehat.
            </span>
          </motion.div>
        </div>
        <div id="fitur" className="h-[180px] bg-primary-50"></div>
        <div className="relative z-10 w-full bg-primary-50 px-[100px] flex flex-col items-center">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            className={`text-h2 bg-orange-red-gradient font-bold mb-[180px] ${styles.textGradient}`}
            transition={transitionDuration}
          >
            Groofit hadir untukmu!
          </motion.div>
          {FEATURE.map(
            ({ title, caption, image, alignText, comingSoon }, idx) => {
              return (
                <FeatureCard
                  key={idx}
                  title={title}
                  caption={caption}
                  image={image}
                  alignText={alignText}
                  comingSoon={comingSoon}
                />
              );
            }
          )}
        </div>
        <div className="relative w-full -mt-48">
          <div className="relative w-screen h-[42vw]">
            <Image
              src={"/assets/vector/testi-web.svg"}
              alt={""}
              layout="fill"
            />
          </div>
          <div id="testimoni" className="absolute top-48" />
          <motion.div
            transition={transitionDuration}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            className={`absolute top-72 pl-[100px] text-h1 font-bold bg-orange-red-gradient ${styles.textGradient}`}
          >
            Apa kata mereka tentang Groofit?
          </motion.div>
        </div>
        <div className="flex mt-[-280px] mb-[100px] mx-[160px] items-center">
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-11/12"
          >
            <Image
              src={"/image/mascot-1.svg"}
              alt={""}
              height={788}
              width={638}
            />
          </motion.div>
          <div className="w-full flex justify-center pt-28">
            <TestiContainer data={TESTIMONI} />
          </div>
        </div>
        <div className="relative w-[960px] mx-auto z-10">
          <CardPrestasi />
          <div id="intro" />
          <div className="flex justify-center items-center mt-[180px]">
            <Video
              style="w-[960px] h-[540px] rounded-[40px] overflow-hidden"
              link={LINKS.intro}
            />
          </div>
        </div>
        <div className="relative w-screen h-[10vw] -mt-96">
          <Image alt="" src="/assets/vector/video-pattern.svg" layout="fill" />
        </div>
        <div className="relative bg-primary-50 px-[100px] -mt-2 pt-[400px] pb-44">
          <div className="flex flex-row items-center w-full">
            <div className="flex flex-col items-start w-2/3">
              <motion.div
                transition={transitionDuration}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true }}
                variants={variantsRiseUp}
                className={`text-h1 font-bold bg-orange-gradient ${styles.textGradient}`}
              >
                Ayo budayakan pola hidup sehat bersama Groofit!
              </motion.div>
              <motion.div
                transition={transitionDuration}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true }}
                variants={variantsRiseUp}
                className="mt-8 cursor-pointer"
              >
                <a href={LINKS.playstore}
                  target="_blank"
                  rel="noreferrer"
                  data-tip
                  data-for="landing1">
                  <Image
                    src={"/assets/vector/playstore.svg"}
                    alt={""}
                    height={72}
                    width={240}
                  />
                </a>
                <ReactTooltip id="landing1" place="bottom" type="warning" effect="solid">Coming soon on iOS</ReactTooltip>
              </motion.div>
            </div>
            <motion.div
              transition={transitionDuration}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative w-1/3 h-[400px]"
            >
              <Image alt="" src="/image/Mockup-CTA.svg" layout="fill" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Top App Styling */}
      <div className={`${styles.mainContainer} xl:hidden`}>
        <motion.div
          transition={transitionDuration}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={variantsRiseUp}
          className="h-[calc(100vh-50px)] w-screen mt-[50px] flex flex-col justify-evenly"
        >
          <div className="w-[81vw] h-[108vw] relative flex justify-center self-center z-10">
            <Image src={"/image/hero.svg"} alt={""} layout="fill" />
          </div>
          <div className="px-8 text-center">
            <h1 className="text-mobileh1 text-primary-50 font-semibold mb-4">
              Ingin workout tanpa ribet?
            </h1>
            <p className="text-body3 text-primary-50">
              Sekarang, workout tidak perlu lagi sambil menghitung jumlah
              gerakanmu dan menggapai smartphonemu untuk mengganti gerakan.{" "}
            </p>
          </div>
          <div className="mt-8 relative z-10 flex flex-col items-center justify-center">
            <a
              href="#subscribe-m"
              rel="noreferrer"
              className="mb-3 w-2/3 text-center py-3 px-8 font-bold text-body3 text-secondary-orange rounded-full bg-primary-50 cursor-pointer"
            >
              Yuk coba sekarang!
            </a>
            <a
              href="#video-m"
              className=" w-2/3 text-center py-3 px-8 font-bold text-body3 text-primary-50 rounded-full border-2 border-primary-50 flex items-center justify-center"
            >
              <p className="mr-2">Lihat video</p>
              <Image
                src={"/assets/icon/play.svg"}
                alt={""}
                height={24}
                width={24}
              />
            </a>
          </div>
        </motion.div>
        <div className="relative w-screen h-[25vw] mt-8">
          <Image
            src={"/assets/vector/bottom-phone.svg"}
            alt={""}
            layout="fill"
          />
        </div>
        <div id="subscribe-m" className="bg-primary-50">
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            transition={transitionDuration}>
            <SubscribeSection />
          </motion.div>
        </div>
        <div className="relative z-10 w-full bg-primary-50 px-8 pt-10 -mt-8">
          <motion.p
            transition={transitionDuration}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            className="lg:text-h3 text-mobileh1 text-primary-800 font-bold text-center"
          >
            Visi kami untuk
            <span className={`bg-orange-red-gradient ${styles.textGradient}`}>
              {" "}
              membuat semua orang mengerti
            </span>{" "}
            dan
            <span className={`bg-orange-red-gradient ${styles.textGradient}`}>
              {" "}
              melakukan pola hidup sehat.
            </span>
          </motion.p>
        </div>
        <div className="h-[100px] w-full bg-primary-50"></div>
        <div id="fitur-m" className="w-full bg-primary-50 px-8">
          <motion.p
            transition={transitionDuration}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            className={`lg:text-h3 text-mobileh1 text-center bg-orange-red-gradient font-bold mb-[100px] xl:mb-[180px] ${styles.textGradient}`}
          >
            Groofit hadir untukmu!
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
            {FEATURE.map(
              ({ title, caption, image, alignText, comingSoon }, idx) => {
                return (
                  <FeatureCard
                    key={idx}
                    title={title}
                    caption={caption}
                    image={image}
                    alignText={alignText}
                    comingSoon={comingSoon}
                  />
                );
              }
            )}
          </div>
        </div>
        <div id="testimoni-m" className="w-full bg-primary-50">
          <motion.div
            transition={transitionDuration}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            className={`lg:text-h3 text-mobileh1 text-center font-bold xl:mb-[180px] bg-orange-red-gradient ${styles.textGradient}`}
          >
            Apa kata mereka <br />
            tentang Groofit!
          </motion.div>
          <div
            className="px-5 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(../../../assets/vector/testi-phone.svg)`,
              height: "100%",
              width: "100vw",
            }}
          >
            <div className="pt-24">
              <TestiContainer data={TESTIMONI} />
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-[100px] px-5">
          <CardPrestasi />
          <div
            id="video-m"
            className="flex justify-center items-center mt-[100px]"
          >
            <Video
              style="w-[calc(100vw-40px)] h-[calc((100vw-40px)*9/16)] rounded-[40px] overflow-hidden"
              link={LINKS.intro}
            />
          </div>
        </div>
        <div className="relative w-screen h-[10vw] -mt-24">
          <Image alt="" src="/assets/vector/video-pattern.svg" layout="fill" />
        </div>
        <div className="flex flex-col items-center -mt-2 pt-[160px] px-8 bg-primary-50">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={transitionDuration}
            className="relative w-[calc(100vw-64px)] h-[calc(19/20*(100vw-40px))]"
          >
            <Image alt="" src="/image/Mockup-CTA.png" layout="fill" />
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            transition={transitionDuration}
            variants={variantsRiseUp}
            className={`mt-10 text-mobileh1 text-center font-bold bg-orange-gradient ${styles.textGradient}`}
          >
            Ayo budayakan pola hidup sehat bersama Groofit!
          </motion.div>
          <motion.div
            transition={transitionDuration}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={variantsRiseUp}
            className="mt-10 cursor-pointer"
          >
            <a href={LINKS.playstore}
              target="_blank"
              rel="noreferrer"
              data-tip
              data-for="landing2">
              <Image
                src={"/assets/vector/playstore.svg"}
                alt={""}
                height={60}
                width={200}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing;
