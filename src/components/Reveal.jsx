import { motion } from "framer-motion"

export default function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}