import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-800 text-gray-100 pt-10 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <p className="flex items-center gap-2 hover:text-[#00AE8A]">
            <HiOutlineDevicePhoneMobile size={20} />
            <a href="tel:+995511106081" className="hover:underline">
              +995551106081
            </a>
          </p>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/PERSONA+CLINIC+%E2%80%A2+%E1%83%99%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%99%E1%83%90+%E1%83%9E%E1%83%94%E1%83%A0%E1%83%A1%E1%83%9D%E1%83%9C%E1%83%90/@41.7800495,44.7787692,17z/data=!3m1!4b1!4m6!3m5!1s0x40446d0021f2cd13:0xdff06b1fe228cd84!8m2!3d41.7800495!4d44.7813441!16s%2Fg%2F11mdv6bhlh?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center gap-2 hover:text-[#00AE8A]"
          >
            <SlLocationPin size={20} /> Tbilisi, Georgia. Bokhuas #3
          </Link>
          <p className="hover:text-[#00AE8A]">
            <a href="mailto:info@surrodonate.com" className="hover:underline">
              personaSurrogacy@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-[#00AE8A]">
              <Link href={`/${locale}/`} className="hover:underline">
                Home
              </Link>
            </li>
            <li className="hover:text-[#00AE8A]">
              <Link href={`/${locale}/about`} className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="hover:text-[#00AE8A]">
              <Link
                href={`/${locale}/become-a-surrogate`}
                className="hover:underline"
              >
                Become a Surrogate
              </Link>
            </li>
            <li className="hover:text-[#00AE8A]">
              <Link
                href={`/${locale}/become-a-parent`}
                className="hover:underline"
              >
                Become a parent
              </Link>
            </li>
            <li className="hover:text-[#00AE8A]">
              <Link href={`/${locale}/faq`} className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook size={30} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <FaInstagram size={30} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <p className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        {t("copyright")}
      </p>
    </footer>
  );
}
