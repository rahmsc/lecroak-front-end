import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/navigation";
import { FramedArtwork } from "../components/framed-artwork";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-white">
      {/* Header */}
      <header className="w-full px-6 py-4 relative z-50">
        {/* Logo */}
        <Link href="/" className="absolute pl-16 pt-8 w-[311.46px] h-[91.07px]">
          <Image
            src="/assets/logo_lacroak.svg"
            alt="Le Croak"
            width={311}
            height={91}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="absolute top-6 right-32 z-50">
          <Navigation />
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative h-[calc(100vh-200px)] z-10">
        <FramedArtwork />
      </div>

      {/* Character Illustration */}
      <div className="absolute bottom-0 right-0 w-[361px] h-[588px] overflow-hidden">
        <div className="absolute right-[-12px] w-[361px] h-[588px] z-20">
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
