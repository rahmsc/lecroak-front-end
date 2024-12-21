import Image from "next/image";

export function FramedArtwork() {
  return (
    <div className="absolute left-[144px] top-[200px] flex items-end gap-[10px]">
      {/* Artwork with Frame */}
      <div className="relative w-[420px] h-[420px] drop-shadow-2xl p-[10px]">
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
        <div className="absolute inset-[66px] z-0">
          <Image
            src="/assets/artwork.png"
            alt="Featured Artwork"
            fill
            className="object-contain"
          />
        </div>

        {/* Signature */}
        <div className="absolute bottom-[80px] right-[50px] z-20 w-[98px] h-[14px]">
          <Image
            src="/assets/signature2.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Artwork Label Card */}
      <div className="bg-gradient-to-b from-[#F1F1F1] to-white p-[16px] py-[18px] w-[243px] mb-[10px] font-['Helvetica'] shadow-[0_1px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.58)]">
        <div className="space-y-2.5">
          <div>
            <h2 className="text-xl leading-4 font-bold text-black pb-4">
              Le Croak <span className="font-normal">(b. 2024)</span>
            </h2>
            <h3 className="text-lg leading-4  font-bold text-black">
              <span className="italic">The Grinch,</span>{" "}
              <span className="font-normal">2025</span>
            </h3>
          </div>

          <div>
            <p className="text-sm leading-[11px] font-normal text-black py-4">
              Pixels on screen
            </p>
            <p className="text-sm leading-[11px] text-black mt-2">
              &quot;This is the prompt that created the artwork, it will exist
              here on the label tag&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
