import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactInfo() {
  return (
    <div className="bg-[#00AE8A] text-white p-6 rounded-xl shadow-md flex-1 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <p className="font-bold text-lg">Address</p>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Link href={""}>
              <HiOutlineLocationMarker size={24} />
            </Link>

            <p>Georgia, Tbilisi</p>
          </div>
          <div className="flex items-center gap-4">
            <BiPhone size={24} />
            <p>+995 555 22 32 12</p>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineEmail size={24} />
            <p>surrogacy@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center lg:justify-start gap-4 lg:mt-12">
        {[FaFacebook, FaInstagram, FaTiktok, FaLinkedin].map((Icon, i) => (
          <div
            key={i}
            className="rounded-full border border-white p-2 hover:bg-white hover:text-[#00AE8A] transition"
          >
            <Icon size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}
