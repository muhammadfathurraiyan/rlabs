"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const Wrapper = ({ children }) => {
  const path = usePathname();
  return (
    <AnimatePresence initial={false} mode="wait">
      <div key={path}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </AnimatePresence>
    
  );
};

export default Wrapper;
