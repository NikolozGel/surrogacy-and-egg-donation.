import Image from "next/image";
import HappyFamily from "../../../../public/assets/images/family-3.png";
import FinalCTA from "@/components/become-a-parent/finalCTA";

export default function BecomeAParentPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero */}
      <section className="relative w-full h-[37vh] sm:h-[60vh] lg:h-[73vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HappyFamily}
            alt="Happy family after surrogacy"
            fill
            quality={100}
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute top-52 md:top-50 lg:top-20 inset-0 flex items-center justify-center lg:justify-end px-5">
          <div className="max-w-2xl text-white bg-black/10 rounded-xl p-2">
            <p className="text-sm md:text-lg lg:text-xl">
              Your dream of becoming a parent starts here with expert care, deep
              empathy, and full transparency.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-semibold text-[#00AE8A] mb-6">
          Why Choose Surrogacy in Georgia?
        </h2>
        <p className="text-gray-600 leading-relaxed lg:text-xl">
          Surrogacy in Georgia has become one of the most reliable and
          affordable paths to parenthood for couples and individuals worldwide.
          With clear legal regulations and supportive medical infrastructure,
          Georgia offers intended parents a safe and transparent environment to
          grow their families. At IVFertilityGeorgia, every surrogate mother is
          selected with the highest medical and psychological standards to
          ensure both safety and trust. Our mission is to make surrogacy in
          Georgia a compassionate and empowering journey, where each parent
          feels secure and supported from the very first step.
        </p>
      </section>

      {/* Programs Overview */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-[#00AE8A]">
          Our Comprehensive Surrogacy Programs
        </h2>
        <p className="text-gray-600 leading-relaxed lg:text-xl">
          Every family’s story is unique, and so are the paths to achieving
          parenthood. IVFertilityGeorgia provides fully tailored surrogacy
          programs and egg donation services designed to meet your personal
          needs. Our surrogacy programs in Georgia include:
        </p>

        <ul className="mt-6 space-y-2 text-gray-600 list-disc pl-6 lg:text-xl">
          <li>Traditional Surrogacy</li>
          <li>Gestational Surrogacy</li>
          <li>Anonymous and Known Egg Donation</li>
          <li>LGBTQ+ Family Support</li>
          <li>International Parent Coordination</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mt-6 lg:text-xl">
          Each program is rooted in ethical practices and supported by a
          dedicated legal team, experienced medical professionals, and emotional
          guidance services. We also provide translation and international
          coordination for foreign parents. With IVFertilityGeorgia, you can
          begin your surrogacy journey with confidence, knowing that every step
          is carefully managed with respect, integrity, and care.
        </p>
      </section>

      {/* Emotional Support */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#00AE8A]">
            Compassionate Support Every Step of the Way
          </h2>
          <p className="text-gray-600 lg:text-xl">
            Choosing surrogacy is not only a medical process, it is also an
            emotional journey built on trust, care, and hope. At
            IVFertilityGeorgia, our multilingual support team is always by your
            side. We are here to answer your questions, provide regular updates,
            and offer reassurance whenever you need it. You are never alone in
            this path. We accompany you not just as professionals but as
            partners who genuinely care about your dream of becoming parents
            through surrogacy.
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
