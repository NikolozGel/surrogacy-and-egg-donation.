import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-800 text-gray-100 pt-10 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg lg:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 hover:text-[#00AE8A] text-sm lg:text-xl">
            <HiOutlineDevicePhoneMobile size={20} />
            <a href="tel:+995511106081" className="hover:underline">
              +995575757535
            </a>
          </p>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/PERSONA+CLINIC..."
            className="flex items-center gap-2 hover:text-[#00AE8A] text-sm lg:text-xl"
          >
            <SlLocationPin size={20} /> Tbilisi, Georgia. Bokhuas #3
          </Link>
          <p className="hover:text-[#00AE8A] text-sm lg:text-xl">
            <a href="mailto:info@surrodonate.com" className="hover:underline">
              personaSurrogacy@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg lg:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm lg:text-xl">
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
                Become a Parent
              </Link>
            </li>
            <li className="hover:text-[#00AE8A]">
              <Link href={`/${locale}/faq`} className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg lg:text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook size={30} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <FaInstagram size={30} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaXTwitter size={30} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div></div>
      </div>

      <p className="mt-10 border-t border-gray-700 pt-4 text-center text-sm lg:text-xl text-gray-400">
        {t("copyright")}
      </p>
    </footer>
  );
}
