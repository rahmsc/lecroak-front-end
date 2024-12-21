"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FramedArtwork() {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 w-full px-4 
      sm:px-6 sm:gap-6 
      lg:flex-row lg:items-end lg:gap-3 lg:absolute lg:left-36 lg:top-48"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8 }}
    >
      {/* Artwork with Frame */}
      <div
        className="relative w-full max-w-[280px] aspect-square 
        sm:max-w-[340px] 
        md:max-w-[380px] 
        lg:max-w-[420px] drop-shadow-2xl"
      >
        {/* Gold Frame */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/assets/frame_gold.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Artwork */}
        <div
          className="absolute inset-[12%] z-0 
          sm:inset-[13%] 
          md:inset-[14%] 
          lg:inset-[15%]"
        >
          <Image
            src="/assets/artwork.png"
            alt="Featured Artwork"
            fill
            className="object-contain"
          />
        </div>

        {/* Signature */}
        <div className="absolute bottom-[17%] right-[15%] z-20 w-[20%] h-[3%]">
          <Image
            src="/assets/signature2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Artwork Label Card */}
      <motion.div
        className="w-full max-w-[240px] sm:max-w-[280px] lg:w-[220px] bg-gradient-to-b from-[#F1F1F1] to-white p-3 sm:p-4 rounded-sm font-['Helvetica'] shadow-[0_1px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.58)]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <div className="space-y-1 sm:space-y-1.5">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg leading-snug font-bold text-black">
              Le Croak <span className="font-normal">(b. 2024)</span>
            </h2>
            <h3 className="text-sm sm:text-base lg:text-lg leading-snug font-bold text-black">
              <span className="italic">The Grinch,</span>{" "}
              <span className="font-normal">2025</span>
            </h3>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm leading-relaxed font-normal text-black">
              Pixels on screen
            </p>
            <p className="text-xs sm:text-sm leading-snug text-black">
              &quot;This is the prompt that created the artwork, it will exist
              here on the label tag&quot;
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
