import Image from "next/image";
import SurrogateHeroImage from "../../../../public/assets/images/surrogate-mother.png";
import RegisterBtn from "@/components/become-a-surrogate/registerBtn";

export default function BecomeASurrogatePage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[37vh] sm:h-[60vh] lg:h-[73vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={SurrogateHeroImage} // <== აქ ჩასვი შენი cover ფოტო
            fill
            alt="Surrogate mother smiling"
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute top-52 md:top-50 lg:top-20 inset-0 flex items-center justify-center lg:justify-end px-5">
          <div className="max-w-2xl text-white backdrop-blur-md bg-black/40 rounded-xl p-2">
            <p className="text-sm md:text-lg lg:text-xl">
              Your journey to becoming a surrogate begins with compassion,
              courage, and unwavering support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}

      {/* Content Section */}
      <section className="py-12 px-5 md:px-16 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Why Choose Surrogacy?
        </h2>
        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          Surrogacy is a deeply meaningful decision a journey of compassion,
          strength, and purpose. For many intended parents, having a child is a
          dream that seems unreachable. As a surrogate, you have the
          extraordinary ability to make that dream come true.
        </p>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          At IVFertilityGeorgia, we understand the emotional and physical
          commitment that surrogacy involves. That’s why we are by your side
          from the very beginning — offering continuous support, respect, and
          the care you deserve throughout the entire process.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">
          What You Receive as a Surrogate
        </h3>
        <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed space-y-3">
          <li>
            <strong>Comprehensive Medical Care:</strong> Our medical team
            ensures your health and well-being are always the top priority —
            before, during, and after the pregnancy.
          </li>
          <li>
            <strong>Legal Protection:</strong> Every legal detail is managed
            with professionalism to protect your rights and ensure clarity for
            all parties involved.
          </li>
          <li>
            <strong>Emotional Support:</strong> Our counselors and coordinators
            are here to listen, support, and empower you through every stage of
            your journey.
          </li>
          <li>
            <strong>Fair Compensation:</strong> Your time, effort, and
            commitment are valued and compensated fairly and transparently.
          </li>
          <li>
            <strong>Respect and Appreciation:</strong> You are not just part of
            the process — you are the heart of it. We honor your choice and
            stand with you proudly.
          </li>
        </ul>

        <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">
          Who Can Become a Surrogate?
        </h3>
        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          We welcome healthy, responsible, and kind-hearted women who are ready
          to help others experience the miracle of parenthood. You may be
          eligible to become a surrogate if you:
        </p>

        <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed space-y-3">
          <li>Are between 21 and 40 years old</li>
          <li>Have given birth to at least one healthy child</li>
          <li>Live a stable and healthy lifestyle</li>
          <li>Are non-smokers and drug-free</li>
          <li>Are emotionally ready for the experience</li>
          <li>Are willing to undergo medical and psychological screenings</li>
        </ul>

        <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">
          A Journey You’ll Never Forget
        </h3>
        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          Many of our surrogates describe the experience as life-changing.
          Knowing that you helped bring a child into the world — and gave a
          family a reason to smile again — is a feeling that stays with you
          forever.
        </p>

        <p className="mb-6 text-base sm:text-lg leading-relaxed">
          Surrogacy is not only about pregnancy — it&apos;s about connection,
          compassion, and courage. It’s about choosing to do something
          extraordinary for someone else. And in that process, you discover new
          strength within yourself.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          If you feel ready to start this powerful journey, we&apos;re here to
          walk it with you — every step of the way.
        </p>
        <RegisterBtn />
      </section>
    </div>
  );
}
