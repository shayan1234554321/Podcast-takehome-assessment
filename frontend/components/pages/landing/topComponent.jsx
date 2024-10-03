"use client";
import React from "react";
import "./topComponent.css";
import { motion } from "framer-motion";

const TopComponent = () => {
  return (
    <div className="top">
      <motion.h4
        initial={{ opacity: 0.3, transform: "translateX(30px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { duration: 0.3, type: "spring", stiffness: 100 },
        }}
      >
        Vocal<span>Vibes</span>
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0.3, transform: "translateX(30px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0px)",
          transition: { duration: 0.3, type: "spring", stiffness: 100 },
        }}
      >
        Where <span>Every Voice</span> Finds Its Rhythm
      </motion.h2>
    </div>
  );
};

export default TopComponent;
