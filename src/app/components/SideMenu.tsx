"use client"

import Image from "next/image";
import hamburgerIcon from "../../../assets/hamburger-menu-more-svgrepo-com.svg";
import { motion, AnimatePresence } from "framer-motion";
import { MouseEvent, useState } from "react";

const menuVariants = {
  open: { 
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: { 
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  }

  return (
    <div className="md:hidden">
      <button onClick={handleClick}>
        <Image
          src={hamburgerIcon}
          width={32}
          height={32}
          alt="hamburgerIcon"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="bg-white shadow-md rounded-md p-4 mt-2"
          >
            <motion.li variants={itemVariants} className="mb-2">Philosophy</motion.li>
            <motion.li variants={itemVariants}>About</motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}