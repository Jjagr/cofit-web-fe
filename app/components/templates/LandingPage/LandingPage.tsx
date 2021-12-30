import type { NextPage } from "next";
import styles from "./Landing.module.css";
import { useWindowSize } from "@util/WindowSize";
import Image from "next/image";
import TestiContainer from "@module/TestiContainer/TestiContainer";

const Landing: NextPage = () => {
  const { height, width } = useWindowSize();

  return (
    <>
      <div className={`${styles.mainContainer} hidden xl:block`}>
        <div className="mt-64 w-1/2 xl:ml-28">
          <h1 className="text-h3 2xl:text-h2 text-primary-50 font-semibold mb-4 2xl:mb-0">
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
        <div className="absolute right-20 top-40 z-10">
          <Image src={"/image/hero.svg"} alt={""} height={788} width={638} />
        </div>
        <div className="absolute top-96 w-full">
          <Image
            src={"/assets/vector/bottom-web.svg"}
            alt={""}
            height={788}
            width={1550}
          />
        </div>
        <div className="absolute top-[1000px] w-full">
          <div className="relative">
            <Image
              src={"/assets/vector/testi-web.svg"}
              alt={""}
              height={788}
              width={1550}
            />
            <div className="absolute top-80 pl-[100px] text-h2 font-bold text-secondary-orange">Apa kata mereka tentang COFIT?</div>
          </div>
        </div>
        <div className="flex mt-[1000px] mx-[160px]">
          <div className="w-2/3">
            <Image
              src={"/image/mascot-1.svg"}
              alt={""}
              height={788}
              width={638}
            />
          </div>
          <div className="w-full flex justify-center mt-40">
            <TestiContainer
              data={[
                { text: "Test", name: "tes", image: "tes" },
                { text: "Test1", name: "tes", image: "tes" },
                { text: "Test2", name: "tes", image: "tes" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Mobile Top App Styling */}
      <div className={`${styles.mainContainer} xl:hidden`}>
        <div className="w-full flex justify-center mt-8">
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
        <div className="h-96 mt-40 w-full bg-primary-50"></div>
      </div>
    </>
  );
};

export default Landing;
