"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface CardProps {
  title: String,
  content: String,
  date: String
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Card({ title, content, date }: CardProps) {
  return (
    <motion.div className="p-2 my-8 md:my-0" variants={item}>
      <Image
        src="https://picsum.photos/300/200?grayscale"
        width={300}
        height={200}
        className="min-w-full"
        alt="imagePlaceholder"
      />
      <h2 className="text-4xl md:text-6xl mt-8 hover:underline">{title}</h2>
      <p className="my-8">{content}</p>
      <p>{date}</p>
    </motion.div>
  )
}