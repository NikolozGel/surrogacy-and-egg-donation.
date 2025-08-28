import Image from "next/image";
export default function HeroImage() {
  return (
    <div className="relative w-full h-[37vh] sm:h-[60vh] lg:h-[73vh] overflow-hidden">
      <Image
        src="/assets/clinic/clinic-2.JPG"
        alt="clinicPhoto"
        fill
        quality={100}
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  );
}
