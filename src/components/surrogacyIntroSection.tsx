// import { useTranslations } from "next-intl";
import Image from "next/image";
import ReproductiveImage from "../../public/assets/images/reproductive-system.png";

export default function SurrogacyIntroSection() {
  // const t = useTranslations("introSection");

  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Only visible on md and up */}
        <div className="hidden md:block mb-12">
          <h3 className="text-3xl font-bold text-center mb-5">
            What we <span className="text-amber-400">offer</span>
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            We’re dedicated to providing ethical, compassionate, and transparent
            care every step of the way. From your first consultation to
            welcoming your child, you’ll be supported, informed, and guided by
            trusted professionals—ensuring a smooth, safe, and successful
            journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Mobile version of the header card */}
          <div className="md:hidden bg-white px-6 py-5 rounded-lg shadow-md hover:bg-[#1db963] transition duration-300 cursor-pointer hover:text-white">
            <h3 className="text-2xl font-bold text-center mb-4">
              What we <span className="text-amber-400">offer</span>
            </h3>
            <p className="text-center">
              We’re dedicated to providing ethical, compassionate, and
              transparent care every step of the way. From your first
              consultation to welcoming your child, you’ll be supported,
              informed, and guided by trusted professionals—ensuring a smooth,
              safe, and successful journey.
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-white py-5 rounded-lg hover:bg-[#1db963] transition duration-300 cursor-pointer shadow-md hover:text-white">
            <Image
              className="rounded-full mb-4 ml-5"
              src={ReproductiveImage}
              width={70}
              height={70}
              alt="reproductive image"
            />
            <h3 className="text-xl font-bold ml-5 mb-4">
              Reproductive Surgery
            </h3>
            <p className="px-5">
              Sometimes, fertility challenges can be addressed with minor
              surgical intervention. Our experienced surgical team specializes
              in minimally invasive procedures to treat conditions like
              fibroids, endometriosis, or blocked tubes—enhancing your chance of
              a successful pregnancy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white py-5 rounded-lg hover:bg-[#1db963] transition duration-300 cursor-pointer shadow-md hover:text-white">
            <Image
              className="rounded-full mb-4 ml-5"
              src={ReproductiveImage}
              width={70}
              height={70}
              alt="reproductive image"
            />
            <h3 className="text-xl font-bold ml-5 mb-4">
              Fertility Preservation
            </h3>
            <p className="px-5">
              Whether due to medical treatment or personal timing, we offer egg,
              sperm, and embryo freezing options so you can plan your future
              with confidence, safety, and flexibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white py-5 rounded-lg hover:bg-[#1db963] transition duration-300 cursor-pointer shadow-md hover:text-white">
            <Image
              className="rounded-full mb-4 ml-5"
              src={ReproductiveImage}
              width={70}
              height={70}
              alt="reproductive image"
            />
            <h3 className="text-xl font-bold ml-5 mb-4">Surrogacy Services</h3>
            <p className="px-5">
              We support a wide range of intended parents. Our ethical surrogacy
              process is supported by experienced legal and medical
              professionals, ensuring safety, clarity, and care at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
