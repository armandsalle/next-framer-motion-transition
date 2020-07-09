import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ImageContext } from "../contexts/imageContext";

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 1,
    },
  },
};

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };

const thumb = ({ city, src, index }) => {
  const { setImageProps, setChanged } = useContext(ImageContext);
  const [willFade, setwillFade] = useState(true);

  const getImageProps = (e) => {
    setwillFade(false);
    const currentImg = e.currentTarget.querySelector(".cacahuete");
    const taille = currentImg.getBoundingClientRect();
    const newImgProps = {
      w: taille.width,
      h: taille.height,
      y: taille.y,
      x: taille.x,
    };

    setImageProps(newImgProps);
    setChanged(true);
  };

  return (
    <Link scroll={false} href="/city/[city]" as={`/city/${city}`}>
      <div className={city} onClick={(e) => getImageProps(e)}>
        <div className={`${city}-thumb cacahuete`}>
          <motion.img
            transition={transition}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={src}
            exit={
              willFade && {
                opacity: 0,
                transition: { delay: 0.1 * index },
              }
            }
          />
        </div>
        <motion.div className="city-name">
          <motion.span
            transition={{ ...transition, delay: 0.1 * index }}
            variants={fadeInUp}
          >
            {city}
          </motion.span>
        </motion.div>
      </div>
    </Link>
  );
};

export default thumb;
