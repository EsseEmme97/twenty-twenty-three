"use client"
import Card from "./Card"
import data from "../../../mock/dummyData"
import { motion } from "framer-motion"

export default function ImagesGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
		duration:1,
        staggerChildren: 0.3
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-4"
    >
      {data.map((element, index) => (
        <Card
          key={index}
          title={element.title}
          content={element.content}
          date={element.date}
        />
      ))}
    </motion.div>
  )
}