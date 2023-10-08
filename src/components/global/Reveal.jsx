"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const revealVariants = {
  initial: {
    opacity: 0,
    y: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

const hiddenVariants = {
  initial: {
    left: 0,
  },
  animate: {
    left: "100%",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("animate");
      slideControls.start("animate");
    }
  }, [isInview]);
  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={revealVariants}
        initial="initial"
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        variants={hiddenVariants}
        initial="initial"
        animate={slideControls}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "rgb(6,182,212)",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
