"use client"
import { motion, useIsPresent } from "framer-motion"
const Labs = () => {
  const isPresent = useIsPresent()
  return (
    <div className="container">
      <h1>Labs</h1>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-y-0 inset-x-0 z-20 bg-cyan-500"
      />
    </div>
  )
}

export default Labs