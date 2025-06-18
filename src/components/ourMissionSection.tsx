import Image from "next/image";
import DoneImage from "../../public/assets/images/check-button.png";

export default function ourMissionSection() {
  return (
    <section className="my-16 px-5 md:px-10 lg:px-22">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">
          What Makes <span className="text-green-600">Us Special</span>
        </h2>
        <p className="text-gray-700 mt-3">
          We&apos;re committed to the highest standards of ethics and
          transparency, so you always fell informed and confident every step of
          the way
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">Comprehensive Care</h3>
            </div>
            <p className="ml-14">
              From IVF to fertility surgery and third-part reproductive, our
              wide range of services ensures we&apos;ve got every aspect of your
              fertility needs covered. Your path to parenthood starts here.
              Contact Fertility Options today. and let&apos;s make your dream of
              becoming a parent a reality
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">Comprehensive Care</h3>
            </div>
            <p className="ml-14">
              From IVF to fertility surgery and third-part reproductive, our
              wide range of services ensures we&apos;ve got every aspect of your
              fertility needs covered. Your path to parenthood starts here.
              Contact Fertility Options today. and let&apos;s make your dream of
              becoming a parent a reality
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">Comprehensive Care</h3>
            </div>
            <p className="ml-14">
              From IVF to fertility surgery and third-part reproductive, our
              wide range of services ensures we&apos;ve got every aspect of your
              fertility needs covered. Your path to parenthood starts here.
              Contact Fertility Options today. and let&apos;s make your dream of
              becoming a parent a reality
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">Comprehensive Care</h3>
            </div>
            <p className="ml-14">
              From IVF to fertility surgery and third-part reproductive, our
              wide range of services ensures we&apos;ve got every aspect of your
              fertility needs covered. Your path to parenthood starts here.
              Contact Fertility Options today. and let&apos;s make your dream of
              becoming a parent a reality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
