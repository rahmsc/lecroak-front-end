import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/navigation";
import { FramedArtwork } from "../components/framed-artwork";
import { MobileNavigation } from "../components/mobile-navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
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
            md:absolute md:left-16 md:top-8 md:w-[311px] md:h-[91px] md:mx-0"
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
      <div
        className="flex flex-col items-center pt-8 pb-16 
        md:block md:relative md:h-[calc(100vh-200px)] z-10"
      >
        <FramedArtwork />
      </div>

      {/* Character Illustration */}
      <div
        className="w-full px-4 
        sm:px-0 
        lg:absolute lg:bottom-0 lg:right-0 lg:w-[361px] lg:h-[588px] lg:overflow-hidden flex justify-end"
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
      </div>
    </main>
  );
}
