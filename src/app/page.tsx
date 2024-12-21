"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "../components/navigation";
import { FramedArtwork } from "../components/framed-artwork";
import { MobileNavigation } from "../components/mobile-navigation";
import { LoadingSpinner } from "../components/loading-spinner";

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      "/assets/logo_lacroak.svg",
      "/assets/le_croak.svg",
      "/assets/frame_gold.png",
      "/assets/artwork.png",
      "/assets/signature2.svg",
    ];

    const loadImage = (url: string) => {
      return new Promise<string>((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence>
        {!imagesLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: imagesLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <header
          className="w-full px-4 py-4 relative z-50 
          sm:px-6 sm:py-6 
          lg:px-8 lg:py-8"
        >
          {/* Logo */}
          <Link
            href="/"
            className="block w-[200px] h-[60px] mx-auto 
              sm:w-[260px] sm:h-[76px]
              lg:absolute lg:left-16 lg:top-8 lg:w-[311px] lg:h-[91px] lg:mx-0"
          >
            <Image
              src="/assets/logo_lacroak.svg"
              alt="Le Croak"
              width={311}
              height={91}
              className="object-contain w-full h-full"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:absolute md:top-8 md:right-16 z-50">
            <Navigation />
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </header>

        {/* Main Content */}
        <motion.div
          className="flex flex-col items-center pt-8 pb-16 
          md:block md:relative md:h-[calc(100vh-200px)] z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <FramedArtwork />
        </motion.div>

        {/* Character Illustration */}
        <motion.div
          className="w-full px-4 
          sm:px-0 
          lg:absolute lg:bottom-0 lg:right-0 lg:w-[361px] lg:h-[588px] lg:overflow-hidden flex justify-end"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div
            className="relative w-full max-w-[300px] h-[400px] mx-auto
            sm:max-w-[340px] sm:h-[440px]
            lg:absolute lg:right-[-12px] lg:w-[361px] lg:h-[588px] lg:max-w-none z-20"
          >
            <Image
              src="/assets/le_croak.svg"
              alt="Le Croak Character"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
