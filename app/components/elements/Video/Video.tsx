import ReactPlayer from "react-player";
import styles from "./Video.module.css";

import { motion } from "framer-motion";

type Props = {
  link: string;
  autoPlay?: boolean;
  style?: string;
  videoStyle?: string;
  overlay?: boolean;
};

const Video = ({
  link,
  autoPlay = false,
  style,
  overlay = false,
  videoStyle,
}: Props) => {
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
      className={`${style} relative`}
    >
      {overlay && <div className={styles.overlay} />}
      {autoPlay ? (
        <video src={link} muted autoPlay loop className={videoStyle} />
      ) : (
        <ReactPlayer url={link} width={"100%"} height={"100%"} />
      )}
    </motion.div>
  );
};

export default Video;
