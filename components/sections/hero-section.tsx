"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const roles = [
    "Backend Specialist",
    "Web Developer",
    "AI / ML Enthusiast",
    "AWS Cloud Engineer",
  ];

  const TYPE_SPEED = 80;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER_TYPE = 1600;

  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && display.length < full.length) {
      timer = setTimeout(
        () => setDisplay(full.slice(0, display.length + 1)),
        TYPE_SPEED
      );
    } else if (!isDeleting && display.length === full.length) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && display.length > 0) {
      timer = setTimeout(
        () => setDisplay(full.slice(0, display.length - 1)),
        DELETE_SPEED
      );
    } else if (isDeleting && display.length === 0) {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [display, isDeleting, roleIdx, roles]);

  return (
    <section className="relative flex min-h-screen flex-col justify-center bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-white/80">
            NimnaKse
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 h-10 text-xl font-medium text-gray-400 sm:text-2xl md:text-3xl"
        >
          <span aria-hidden="true">{display}</span>
          <span className="animate-pulse">|</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full border border-white/20 hover:border-white/60 transition"
          >
            <Link href="#projects">View&nbsp;My&nbsp;Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/30 hover:border-white/60 transition"
          >
            <Link href="#contact">Get&nbsp;In&nbsp;Touch</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.6 },
        }}
      >
        <Link href="#about">
          <ChevronDown size={26} />
        </Link>
      </motion.div>
    </section>
  );
}
