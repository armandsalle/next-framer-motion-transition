import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageContext } from "../../contexts/imageContext";

const transition = { duration: 0.8, ease: [0.77, 0.03, 0.21, 0.95] };

const links = {
  nantes: "https://source.unsplash.com/hTVMOw46EQs",
  paris: "https://source.unsplash.com/UPMciZiwDGI",
  brest: "https://source.unsplash.com/nvZvIjS8pFA",
};

const City = ({ src, city }) => {
  const { imageProps } = useContext(ImageContext);

  return (
    <motion.div exit="exit" inital="initial" className="paris-page">
      <div className="img-container">
        <motion.div
          style={{ overflow: "hidden", willChange: "transform, width, height" }}
          initial={{
            width: imageProps.w,
            height: imageProps.h,
            x: imageProps.x,
            y: imageProps.y,
            zIndex: 999,
          }}
          animate={{
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            zIndex: "auto",
          }}
          transition={transition}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: {
              duration: 0.6,
            },
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={src}
          />
        </motion.div>
      </div>

      <motion.div className="title-container">
        <motion.div className="title">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...transition, duration: 0.5, delay: 1.2 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
          >
            {city}
          </motion.span>
        </motion.div>
      </motion.div>
      <Link scroll={false} href="/" as="/">
        <motion.a
          className="home-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          BACK
        </motion.a>
      </Link>
    </motion.div>
  );
};

City.getInitialProps = (context) => {
  const city = context.query.city;
  const src = links[city];

  return { src, city };
};

export default City;
