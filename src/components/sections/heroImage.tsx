import Image from "next/image";
export default function HeroImage() {
  return (
    <div className="relative w-full aspect-[16/9] max-h-[65vh]">
      <Image
        src="/assets/clinic/clinic-2.JPG"
        alt="clinicPhoto"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
