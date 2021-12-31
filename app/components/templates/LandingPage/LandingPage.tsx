import type { NextPage } from "next";
import styles from "./Landing.module.css";
import { useWindowSize } from "@util/WindowSize";
import Image from "next/image";
import TestiContainer from "@module/TestiContainer/TestiContainer";
import FeatureCard from "@module/FeatureCard/FeatureCard";
import { FEATURE, TESTIMONI } from "@constant/index";
import CardPrestasi from "@element/CardPrestasi/CardPrestasi";

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
            <div className="mt-10 flex">
              <button className="mr-6 py-3 px-8 font-bold text-body1 text-secondary-orange rounded-full bg-primary-50">
                Yuk coba sekarang!
              </button>
              <button className="mr-6 py-3 px-8 font-bold text-body1 text-primary-50 rounded-full border-2 border-primary-50 flex items-center">
                <p className="mr-2">Lihat video</p>
                <Image
                  src={"/assets/icon/play.svg"}
                  alt={""}
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
          <div className="relative w-1/2 h-full z-10">
            <Image src={"/image/hero.svg"} alt={""} layout="fill" />
          </div>
        </div>
        <div className="relative w-screen h-112 -mt-80">
          <Image
            src={"/assets/vector/bottom-web.svg"}
            alt={""}
            layout="fill"
          />
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
        <div className="h-[180px] bg-primary-50"></div>
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
          <div className="relative w-screen h-[640px]">
            <Image
              src={"/assets/vector/testi-web.svg"}
              alt={""}
              layout="fill"
            />
          </div>
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
        <div className="px-[160px] mb-[180px]">
          <CardPrestasi />
        </div>
      </div>

      {/* Mobile Top App Styling */}
      <div className={`${styles.mainContainer} xl:hidden`}>
        <div className="w-full flex justify-center mt-8 z-10">
          <Image src={"/image/hero.svg"} alt={""} height={788} width={600} />
        </div>
        <div className="px-8 text-center">
          <h1 className="text-h3 text-primary-50 font-semibold mb-4">
            Ingin workout tanpa ribet?
          </h1>
          <p className="text-body1 text-primary-50">
            Sekarang, workout tidak perlu lagi sambil menghitung jumlah
            gerakanmu dan menggapai smartphonemu untuk mengganti gerakan.{" "}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center">
            <button className="mb-3 w-11/12 text-center py-3 px-8 font-bold text-body1 text-secondary-orange rounded-full bg-primary-50">
              Yuk coba sekarang!
            </button>
            <button className=" w-11/12 text-center py-3 px-8 font-bold text-body1 text-primary-50 rounded-full border-2 border-primary-50 flex items-center justify-center">
              <p className="mr-2">Lihat video</p>
              <Image
                src={"/assets/icon/play.svg"}
                alt={""}
                height={24}
                width={24}
              />
            </button>
          </div>
        </div>
        <div className="absolute" style={{ top: "950px" }}>
          <Image
            src={"/assets/vector/bottom-phone.svg"}
            alt={""}
            height={788}
            width={1280}
          />
        </div>
        <div className="h-[76px] mt-40 w-full bg-primary-50"></div>
        <div className="w-full bg-primary-50 px-8 pt-10">
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
        <div className="w-full bg-primary-50 px-8">
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
        <div className="w-full bg-primary-50">
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
            <div className="my-[100px]">
              <CardPrestasi />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
