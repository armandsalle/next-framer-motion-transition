import React from "react";
import { motion } from "framer-motion";
import Thumb from "../components/thumb";

export default function Home() {
  return (
    <motion.div
      exit="exit"
      initial="initial"
      animate="animate"
      className="container"
    >
      <Thumb
        city="paris"
        src="https://source.unsplash.com/UPMciZiwDGI"
        index={1}
      />
      <Thumb
        city="nantes"
        src="https://source.unsplash.com/hTVMOw46EQs"
        index={2}
      />
      <Thumb
        city="brest"
        src="https://source.unsplash.com/nvZvIjS8pFA"
        index={3}
      />
    </motion.div>
  );
}
