"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { TypingEffect } from "./TypingEffect";
import { AvailabilityBadge } from "./AvailabilityBadge";

interface ProfileCardProps {
  onContactClick?: () => void;
}

const roles = [
  "Soziologie Studentin",
  "Marketing Enthusiastin",
  "Social Media & Trends",
  "Kommunikation & Brand Thinking",
];

export const ProfileCard = ({ onContactClick }: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-8 text-center"
    >
      {/* Floating decorative icon */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-6 right-8 text-rose-500 opacity-40"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={36} strokeWidth={2} />
        </motion.div>
      </motion.div>

      {/* Decorative heart icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 0.3,
          scale: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { delay: 0.3, duration: 0.5 },
          scale: { delay: 0.3, duration: 0.5 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute -top-4 left-6 text-pink-500 opacity-30"
        aria-hidden="true"
      >
        <Heart size={28} strokeWidth={2} />
      </motion.div>

      {/* Availability Badge */}
      <div className="mb-4 flex justify-center">
        <AvailabilityBadge available={true} />
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative mx-auto mb-6 flex h-24 w-24 translate-x-2 translate-y-2 items-center justify-center overflow-hidden rounded-full shadow-xl ring-4 ring-rose-100 dark:ring-rose-900/60"
      >
        <span
          className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-rose-200/70 via-pink-200/50 to-fuchsia-200/60 blur-md"
          aria-hidden="true"
        />
        <Image
          src="/alanur_bild.jpg"
          alt="Alanur Atesoglu"
          width={96}
          height={96}
          className="h-full w-full object-cover object-[center_20%]"
          priority
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Alanur<span className="text-rose-500">.</span>
      </motion.h1>

      {/* Subtitle with Typing Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-4 px-4 text-base text-gray-600 dark:text-gray-300"
      >
        <TypingEffect words={roles} className="text-rose-500 font-semibold" />
      </motion.div>

      {/* Interest badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500"
      >
        <span className="rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 px-3 py-1">Soziologie</span>
        <span className="rounded-full bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 px-3 py-1">Marketing</span>
        <span className="rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-600 dark:text-fuchsia-300 px-3 py-1">Social Media</span>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500"
      />

      {/* CTA Section */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContactClick}
        className="mt-8 w-full rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 p-4 border border-rose-100 dark:border-rose-800 cursor-pointer text-left transition-colors"
      >
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Lass uns vernetzen und austauschen.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Ich freue mich auf Gespräche rund um Soziologie, Marketing und digitale Kommunikation.
        </p>
      </motion.button>
    </motion.div>
  );
};
