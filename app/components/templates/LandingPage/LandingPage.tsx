import type { NextPage } from "next";
import styles from "./Landing.module.css";
import { useWindowSize } from "@util/WindowSize";
import Image from "next/image";
import TestiContainer from "@module/TestiContainer/TestiContainer";
import FeatureCard from "@module/FeatureCard/FeatureCard";
import { FEATURE, LINKS, TESTIMONI } from "@constant/index";
import CardPrestasi from "@element/CardPrestasi/CardPrestasi";
import Video from "@element/Video/Video";

const Landing: NextPage = () => {
  const { height, width } = useWindowSize();

  return (
    <>
      <div className={`${styles.mainContainer} hidden xl:block`}>
        <div className="flex flex-row items-center h-[calc(100vh-112px)] mt-28">
          <div className="-mt-28 w-1/2 xl:ml-28">
            <h1 className="text-h2 2xl:text-h2 text-primary-50 font-semibold mb-6 2xl:mb-0">
              Ingin workout tanpa ribet?
            </h1>
            <p className="w-2/3 text-body1 text-primary-50">
              Sekarang, workout tidak perlu lagi sambil menghitung jumlah
              gerakanmu dan menggapai smartphonemu untuk mengganti gerakan.{" "}
            </p>
            <div className="relative mt-10 z-10 flex">
              <a
                href={LINKS.playstore}
                target="_blank"
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
          </div>
          <div className="relative w-1/2 h-full z-10">
            <Image src={"/image/hero.svg"} alt={""} layout="fill" />
          </div>
        </div>
        <div className="relative w-screen h-[30vw] -mt-80">
          <Image src={"/assets/vector/bottom-web.svg"} alt={""} layout="fill" />
        </div>
        <div className="relative w-full -mt-16 bg-primary-50 px-[200px] z-10">
          <p className="text-h1 font-bold text-center">
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
          </p>
        </div>
        <div id="fitur" className="h-[180px] bg-primary-50"></div>
        <div className="relative z-10 w-full bg-primary-50 px-[100px] flex flex-col items-center">
          <p
            className={`text-h2 bg-orange-red-gradient font-bold mb-[180px] ${styles.textGradient}`}
          >
            COFIT App hadir untukmu!
          </p>
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
          <div
            className={`absolute top-80 pl-[100px] text-h1 font-bold bg-orange-red-gradient ${styles.textGradient}`}
          >
            Apa kata mereka tentang COFIT?
          </div>
        </div>
        <div className="flex mt-[-320px] mb-[100px] mx-[160px] items-center">
          <div className="w-11/12">
            <Image
              src={"/image/mascot-1.svg"}
              alt={""}
              height={788}
              width={638}
            />
          </div>
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
              <div
                className={`text-h1 font-bold bg-orange-gradient ${styles.textGradient}`}
              >
                Ayo budayakan pola hidup sehat bersama COFIT App!
              </div>
              <a
                href={LINKS.playstore}
                target="_blank"
                rel="noreferrer"
                className="mt-8"
              >
                <Image
                  src={"/assets/vector/playstore.svg"}
                  alt={""}
                  height={72}
                  width={240}
                />
              </a>
            </div>
            <div className="relative w-1/3 h-[400px]">
              <Image
                alt=""
                src="/assets/vector/summary-illustration.svg"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top App Styling */}
      <div className={`${styles.mainContainer} xl:hidden`}>
        <div className="h-[calc(100vh-50px)] w-screen mt-[50px] flex flex-col justify-evenly">
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
              href={LINKS.playstore}
              target="_blank"
              rel="noreferrer"
              className="mb-3 w-2/3 text-center py-3 px-8 font-bold text-body3 text-secondary-orange rounded-full bg-primary-50"
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
        </div>
        <div className="relative w-screen h-[25vw] mt-8">
          <Image
            src={"/assets/vector/bottom-phone.svg"}
            alt={""}
            layout="fill"
          />
        </div>
        <div className="relative z-10 w-full bg-primary-50 px-8 pt-10 -mt-8">
          <p className="lg:text-h3 text-mobileh1 text-primary-800 font-bold text-center">
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
          </p>
        </div>
        <div className="h-[100px] w-full bg-primary-50"></div>
        <div id="fitur-m" className="w-full bg-primary-50 px-8">
          <p
            className={`lg:text-h3 text-mobileh1 text-center bg-orange-red-gradient font-bold mb-[100px] xl:mb-[180px] ${styles.textGradient}`}
          >
            COFIT App hadir untukmu!
          </p>
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
          <p
            className={`lg:text-h3 text-mobileh1 text-center font-bold xl:mb-[180px] bg-orange-red-gradient ${styles.textGradient}`}
          >
            Apa kata mereka <br />
            tentang COFIT!
          </p>
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
          <div className="relative w-[calc(100vw-64px)] h-[calc(19/20*(100vw-64px))]">
            <Image
              alt=""
              src="/assets/vector/summary-illustration.svg"
              layout="fill"
            />
          </div>
          <div
            className={`mt-10 text-mobileh1 text-center font-bold bg-orange-gradient ${styles.textGradient}`}
          >
            Ayo budayakan pola hidup sehat bersama COFIT App!
          </div>
          <a
            href={LINKS.playstore}
            target="_blank"
            rel="noreferrer"
            className="mt-10"
          >
            <Image
              src={"/assets/vector/playstore.svg"}
              alt={""}
              height={60}
              width={200}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
