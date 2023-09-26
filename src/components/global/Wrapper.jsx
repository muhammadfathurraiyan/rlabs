"use client";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const wrapperVariants = {
  initial: {
    x: "50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
  },
  exit: {
    x: "-50%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "circIn",
    },
  },
};

function FrozenRouter(props) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const Wrapper = ({ children }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default Wrapper;
