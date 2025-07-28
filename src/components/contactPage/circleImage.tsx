import Image from "next/image";
import familyImage from "../../../public/assets/images/family-2.jpg";

export default function CircleImage() {
  return (
    <div className="relative flex justify-center ">
      <div className="rounded-full hidden xl:block overflow-hidden w-64 h-64 lg:w-80 lg:h-80 border-[10px] border-[#FFEFA3] relative z-10">
        <Image
          src={familyImage}
          alt="Family"
          width={320}
          height={320}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
