// import reproductiveSystem2 from "../../../public/assets/images/reproductive-system-2.png";
import reproductiveSystem from "../../../public/assets/images/reproductive-system.png";

import Image from "next/image";
export default function FeatureBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem}
          width={50}
          height={50}
          alt="Holistic Fertility Care"
          className="rounded-lg mt-7"
        />
        <h3 className="font-semibold text-lg">Holistic Fertility Care</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-5">
          We see you as a whole person, not just a patient. Our holistic
          approach integrates physical, emotional, and psychological support,
          creating a nurturing environment where you always feel heard and cared
          for.
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem}
          width={50}
          height={50}
          alt="Supportive Space"
          className="rounded-full mt-7"
        />
        <h3 className="font-semibold text-lg">Supportive Space</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          We know fertility challenges can be tough on the heart and mind.
          That&apos;s why our team provides not only medical care but also
          emotional support, offering counseling services and support groups to
          help you through the range of emotional aspects of your journey.
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem}
          width={50}
          height={50}
          alt="Personalized Treatment Plans"
          className="rounded-lg mt-7"
        />
        <h3 className="font-semibold text-lg">Personalized Treatment Plans</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          Every fertility journey is different, with a variation of priorities.
          To maximize your opportunity for success, we take the time to
          understand your unique situation before designing your tailored
          treatment plan.
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem}
          width={50}
          height={50}
          alt="State-of-the-Art Technology"
          className="rounded-lg mt-7"
        />
        <h3 className="font-semibold text-lg">State-of-the-Art Technology</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          We&apos;re committed to staying ahead of the curve, investing in the
          latest fertility technologies and techniques. Our laboratory is
          equipped with cutting-edge tools, and our team is dedicated to
          continually improving outcomes through research and innovation.
        </p>
      </div>
    </div>
  );
}
