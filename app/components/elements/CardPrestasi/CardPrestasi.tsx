import Image from "next/image";
import { motion } from "framer-motion";

const CardPrestasi = () => {
  const variantsRiseUp = {
    onscreen: { opacity: 1, y: 0, x: 0 },
    offscreen: { opacity: 0, y: "100%" },
  };
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={variantsRiseUp}
      transition={{ opacity: { duration: 0.5 } }}
      className="flex flex-col md:flex-row bg-primary-50 rounded-36 p-5 px-8 md:p-10 items-center justify-between"
    >
      <div className="hidden md:block">
        <Image src={"/assets/icon/award.svg"} height={148} width={200} alt="" />
      </div>
      <div className="block md:hidden">
        <Image src={"/assets/icon/award.svg"} height={96} width={96} alt="" />
      </div>
      <div className=" flex-grow my-2 md:my-0">
        <div className="text-center md:text-left font-bold bg-orange-red-gradient text-transparent bg-clip-text text-mobileh1 md:text-h2 mb-4">
          Prestasi Groofit
        </div>
        <ol
          style={{
            display: "list-item",
            listStyleType: "decimal",
          }}
          className="ml-5"
        >
          <li>Winner Diginove STEI ITB 2021</li>
          <li>1st Winner Pitching Competition ICoDSE 2021</li>
        </ol>
      </div>
      <div className="hidden md:block">
        <Image src={"/image/award-phone.svg"} height={148} width={200} alt="" />
      </div>
      <div className="block md:hidden">
        <Image src={"/image/award-web.svg"} height={56} width={200} alt="" />
      </div>
    </motion.div>
  );
};

export default CardPrestasi;
