import Image from "next/image";
import aboutLogo from "../../../../public/assets/logo/about-logo.png";

export default function Page() {
  return (
    <div>
      {/* Responsive Hero Image */}
      <div className="relative w-full aspect-[16/9] max-h-[85vh]">
        <Image
          src="/assets/clinic/clinic-2.JPG"
          alt="clinicPhoto"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="mt-6 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="font-bold text-xl lg:text-3xl sm:text-3xl text-center mb-4">
            At Fertility Options, we believe in the{" "}
            <span className="text-[#FCCB40]">power of choice</span>
          </h2>

          <p className="text-gray-700 mb-4 text-base sm:text-lg text-center">
            At Fertility Options, we believe in the power of choice. The journey
            to parenthood is deeply personal and unique for every individual or
            couple, which is why we are committed to offering a range of
            tailored solutions. We emphasize the importance of providing diverse
            and flexible pathways to help you achieve your dream of having a
            family.
          </p>

          <p className="text-gray-700 mb-4 text-base sm:text-lg text-center">
            We understand that the road to parenthood can be filled with
            uncertainties and challenges, but it is also one of hope and
            possibilities. We are here to empower you to take control of your
            fertility journey, offering choices that align with your needs and
            values. Whether you are exploring IVF, egg donation, surrogacy, or
            other fertility treatments, our expert team is dedicated to helping
            you navigate the options that will best lead to the family you
            envision.
          </p>
        </div>

        {/* What to Expect Section */}
        <div className="">
          <div className="mb-10">
            <h2 className="font-bold text-2xl sm:text-3xl mb-3">
              What to <span className="text-[#88C040]">Expect</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg">
              Starting a surrogacy journey can feel like stepping into the
              unknown, but at Fertility Options, we’re here to simplify the
              process and support you through every phase. Surrogacy is a
              journey that requires patience, but with our expert guidance,
              it&apos;s smoother and more streamlined. We handle everything—from
              pairing you with the perfect surrogate and selecting the ideal egg
              donor to navigating legalities and connecting with top-notch
              fertility clinics. Our all-inclusive service ensures you have
              everything you need, all in one place, with a team that’s with you
              every step of the way.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:justify-between gap-4 mb-16">
            <button className="bg-[#1F5673] hover:bg-[#17465f] text-sm sm:text-base text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Become a Parent
            </button>
            <button className="bg-[#DFF5E1] hover:bg-[#c9eacb] text-sm sm:text-base text-[#237A57] font-semibold px-6 py-3 rounded-lg transition-colors">
              Become a Surrogate
            </button>
          </div>
        </div>
      </div>
      {/* Footer CTA */}
      <div className="flex flex-col items-center text-center px-4 mb-12 max-w-2xl mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl mb-3">
          Our <span className="text-[#0ca385]">Way</span>
        </h3>
        <p className="text-gray-700 text-base sm:text-lg">
          We’re committed to the highest standards of ethics and transparency,
          so you always feel informed and confident every step of the way.
        </p>
      </div>
      <div>
        <div className="px-6 mb-10">
          <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl">
            <Image
              src={aboutLogo}
              width={50}
              height={50}
              alt="100"
              className="rounded-lg mt-7"
            />
            <h3 className="font-semibold">Holistic Fertility Care</h3>
            <p className="text-center mb-5">
              We see you as a whole person, not just a patient. Our holistic
              approach integrates pysical, emotional, and psychological support,
              creating a nurting environment where you always feel heard and
              cared for
            </p>
          </div>
        </div>
        <div className="px-6 mb-10">
          <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl">
            <Image
              src={aboutLogo}
              width={50}
              height={50}
              alt="100"
              className="rounded-lg mt-7"
            />
            <h3 className="font-semibold">Supportive Space</h3>
            <p className="text-center mb-5">
              We know fertility challenges can be tough on the heart and mind.
              That&apos;s why our team provides not only medical care but also
              emotional support, offering counseling services and support groups
              to help you through the range of emotional aspects of your journey
            </p>
          </div>
        </div>
        <div className="px-6 mb-10">
          <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl">
            <Image
              src={aboutLogo}
              width={50}
              height={50}
              alt="100"
              className="rounded-lg mt-7"
            />
            <h3 className="font-semibold">Personalized Treatment Plans</h3>
            <p className="text-center mb-5">
              Every fertility journey is different, with a variation of
              priorities. To maximize your opportunity for success, we take the
              time to understand your unique situation before designing your
              tailored treatment plan
            </p>
          </div>
        </div>
        <div className="px-6 mb-20">
          <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl">
            <Image
              src={aboutLogo}
              width={50}
              height={50}
              alt="100"
              className="rounded-lg mt-7"
            />
            <h3 className="font-semibold">State-of-the-Art Technology</h3>
            <p className="text-center mb-5">
              We&apos;re commited to staying ahead of the curve, investing in
              the latest fertility technologies and techniques. Our laboratory
              is equipped with cutting-edge tools, and our team is dedicated to
              continually improving outcomes throgh research and innovation.
            </p>
          </div>
        </div>

        <div className="px-3">
          <h3 className="font-bold text-xl">
            Fertility Options <span className="text-orange-300">Guarantee</span>{" "}
          </h3>
          <p className="mt-4 text-sm text-gray-700">
            Our Guaranteed Program offers you both emotional and financial peace
            of mind. with a clear budget cap and the promise that your dream of
            having a baby will come true, no matther how many tries it takes.
            Our complete assurance program gives you both emotional and
            financial secirty, with a transparent cost projection and the
            commitment that your goal of having a baby will be realized.
            regardless of how many attempts it may take. Our full guarantee
            program offers you emotional and financial peace of mind, with a
            clear budget cap and the assurance that your goal of having a child
            will be reached, no matther how many tries it takes.
          </p>
        </div>
        <div className="px-3 mt-6 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#00AE8A] w-5 h-5 rounded-full"></div>
              <p className="font-medium">Unlimited egg donation</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#A5D761] w-5 h-5 rounded-full"></div>
              <p className="font-medium">Unlimited embryo transfers</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#FCCB40] w-5 h-5 rounded-full"></div>
              <p className="font-medium">Ulimited surrogate pairings</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#8fd322] w-5 h-5 rounded-full"></div>
              <p className="font-medium">Complete pregnancy care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
