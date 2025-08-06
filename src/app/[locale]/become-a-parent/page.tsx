import Image from "next/image";
import HappyFamily from "../../../../public/assets/images/family-3.png";
import FinalCTA from "@/components/become-a-parent/finalCTA";

export default function BecomeAParentPage() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero */}
      <section className="relative w-full aspect-[4/5] max-h-[65vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={HappyFamily}
            fill
            alt="Happy family after surrogacy"
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute top-60 md:top-50 lg:top-20 inset-0 flex items-center justify-center lg:justify-end px-5">
          <div className="max-w-2xl text-white backdrop-blur-md bg-black/40 rounded-xl p-2">
            <p className="text-sm md:text-lg lg:text-xl">
              Your dream of becoming a parent starts here with expert care, deep
              empathy, and full transparency.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Why Choose IVFertilityGeorgia?
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          Choosing to grow your family through surrogacy or egg donation is a
          profound decision and at IVFertilityGeorgia, we’re honored to walk
          this path with you. From the very first conversation, we provide
          clear, compassionate, and expert guidance tailored to your personal
          needs. Our experienced team will support you through every legal,
          emotional, and medical step of the journey. We operate with unwavering
          integrity, cultural sensitivity, and a deep commitment to your
          family’s future. We understand this is more than a medical process —
          it’s a life-changing emotional journey. That’s why we offer more than
          just services. We offer a safe, respectful, and loving environment
          where your hopes can take root and grow.
        </p>
      </section>

      {/* Steps to Parenthood */}
      <section className=" py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700 mb-10 text-center">
            Your Journey to Parenthood Step by Step
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col items-start space-y-4">
              <span className="text-2xl font-bold text-gray-700">
                1. Submit Your Application
              </span>
              <p className="text-gray-700">
                Begin by completing our secure and confidential application.
                Tell us about your family-building goals, preferences, and
                unique circumstances this helps us provide personalized guidance
                from the very beginning.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <span className="text-2xl font-bold text-gray-700">
                2. Initial Consultation
              </span>
              <p className="text-gray-700">
                You’ll meet with our caring coordinators (virtually or
                in-person) for a thorough consultation. We&apos;ll walk you
                through the process, timelines, and costs, and answer all of
                your questions with honesty and clarity.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <span className="text-2xl font-bold text-gray-700">
                3. Begin the Journey
              </span>
              <p className="text-gray-700">
                Once you’re ready, we’ll carefully match you with a surrogate or
                donor who aligns with your values. From there, we’ll guide you
                through each legal, medical, and emotional milestone until your
                child is in your arms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Our Comprehensive Programs
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          Every family is unique — and so are the paths to parenthood. At
          IVFertilityGeorgia, we offer a variety of fully customizable surrogacy
          and egg donation programs, including: • Traditional Surrogacy •
          Gestational Surrogacy • Anonymous and Known Egg Donation • LGBTQ+
          Family-Building Support • International Parent Services Each program
          includes full legal oversight, expert medical coordination, dedicated
          emotional support, and translation services as needed. We ensure your
          experience is safe, ethical, and aligned with your wishes.
        </p>
      </section>

      {/* Emotional Support */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">
            Compassionate Support, Every Step of the Way
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            You are not alone in this journey. Our multilingual support team is
            always here to answer your questions, offer guidance, and provide
            consistent emotional reassurance — day or night. We walk beside you
            not just as professionals, but as partners who truly care. Whether
            you need updates, a listening ear, or simply reassurance, we’re here
            — with warmth, respect, and unwavering commitment to your growing
            family.
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
