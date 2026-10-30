"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion, Variants } from "motion/react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-14 flex flex-col lg:flex-row gap-20 px-7 md:px-10 overflow-hidden">
      <motion.div
        className="w-full lg:w-4/7 flex flex-col gap-7"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-full py-1.5 px-3 w-max flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-2xs text-foreground-muted uppercase tracking-wider font-mono">
            Full-Stack Developer · Building for the Web
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-[1.15] font-heading font-bold"
        >
          I build digital <br />
          experiences that <br />
          <span className="text-primary underline underline-offset-7">
            work beautifully
          </span>
          .
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-foreground-muted font-medium text-base md:text-lg max-w-2xl"
        >
          I turn complex ideas into fast, scalable, and thoughtfully designed
          digital products — from polished frontend experiences to resilient,
          high-throughput backend architecture.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            Explore my work
            <ArrowUpRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-tertiary"
          >
            Let's talk
            <Mail size={18} />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-3/7"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          loading="eager"
          src={IMAGES.hero}
          alt="Hero"
          width={500}
          height={500}
          className="aspect-4/3 h-full w-full rounded-xl object-cover shadow-2xl shadow-primary/5"
        />
      </motion.div>
    </section>
  );
}
