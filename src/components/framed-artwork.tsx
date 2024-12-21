import Image from "next/image";

export function FramedArtwork() {
  return (
    <div
      className="flex flex-col items-center gap-4 w-full px-4 
      sm:px-6 sm:gap-6 
      md:flex-row md:items-end md:gap-3 md:absolute md:left-36 md:top-48"
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
        <div className="absolute bottom-[15%] right-[12%] z-20 w-[20%] h-[3%]">
          <Image
            src="/assets/signature2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Artwork Label Card */}
      <div
        className="w-full max-w-[280px] 
        sm:max-w-[320px] 
        lg:w-[243px] bg-gradient-to-b from-[#F1F1F1] to-white p-4 
        font-['Helvetica'] shadow-[0_1px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.58)]"
      >
        <div className="space-y-2.5">
          <div>
            <h2 className="text-base sm:text-lg lg:text-xl leading-snug font-bold text-black pb-3">
              Le Croak <span className="font-normal">(b. 2024)</span>
            </h2>
            <h3 className="text-base sm:text-lg leading-snug font-bold text-black">
              <span className="italic">The Grinch,</span>{" "}
              <span className="font-normal">2025</span>
            </h3>
          </div>

          <div className="space-y-3">
            <p className="text-sm leading-relaxed font-normal text-black">
              Pixels on screen
            </p>
            <p className="text-sm leading-relaxed text-black">
              &quot;This is the prompt that created the artwork, it will exist
              here on the label tag&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
