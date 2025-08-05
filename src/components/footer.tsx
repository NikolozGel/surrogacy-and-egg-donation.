import { useTranslations } from "next-intl";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-900 text-gray-100 pt-10 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@surrodonate.com" className="hover:underline">
              personaSurrogacy@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 (234) 567-890
            </a>
          </p>
          <p>
            Address: <br />
            Tbilisi, Georgia. Bokhuas #6
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become a Surrogate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become a parent
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
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
