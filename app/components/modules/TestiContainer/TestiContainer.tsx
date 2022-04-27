import CardTesti from "@element/CardTesti/CardTesti";
import { useEffect, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

type Testi = {
  name: string;
  text: string;
};

type Props = {
  data: Array<Testi>;
};

const TestiContainer = ({ data }: Props) => {
  const [onTop, setOnTop] = useState(0);

  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(true);

  const changeOnTop = () => {
    setTimeout(() => {
      setOnTop((onTop + 1) % data.length);
      setTimer(true);
    }, 5000);
  };

  useEffect(() => {
    if (timer) {
      setTimer(false);
      changeOnTop();
    }
  }, [onTop, timer]);

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
      className="flex flex-col w-full"
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between">
        <Image
          src={"/assets/icon/left.svg"}
          alt={""}
          height={32}
          width={32}
          onClick={() => setOnTop((onTop + data.length - 1) % data.length)}
          className={"cursor-pointer"}
        />
        <div className={`slides relative w-full h-56 mx-4 md:mx-8`}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`absolute w-full h-full ${
                  onTop === index ? "z-10" : "z-0"
                }`}
              >
                <CardTesti text={item.text} name={item.name} />
              </div>
            );
          })}
        </div>
        <Image
          src={"/assets/icon/right.svg"}
          alt={""}
          height={32}
          width={32}
          onClick={() => setOnTop((onTop + 1) % data.length)}
          className={"cursor-pointer"}
        />
      </div>
      <div className={"flex justify-center mt-8"}>
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full bg-primary-50 ${
                onTop === index ? "w-5" : "w-3 opacity-50"
              }
                transition duration-300 ease-in-out
                `}
              onClick={() => setOnTop(index)}
            ></div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TestiContainer;
