"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationMenu from "./navigationMenu";
import DesktopNavigationMenu from "./desktopNavigationMenu";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logoImage from "../../public/assets/logo/logo-5.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHamburgerMenuChange = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    if (isAnimating) return;
    // setIsAnimating(true);
    setIsMenuOpen(false);
  };

  return (
    <header className="my-2">
      <nav className="relative">
        <div className="flex items-center justify-between lg:justify-evenly px-5">
          {/* Logo */}
          <Link href="/" onClick={handleCloseMenu}>
            <Image src={logoImage} alt="logoImage" width={110} height={110} />
          </Link>

          {/* Desktop Menu */}
          <DesktopNavigationMenu />

          {/* Mobile Hamburger */}
          <RxHamburgerMenu
            size={35}
            color="gray"
            className="lg:hidden cursor-pointer"
            onClick={handleHamburgerMenuChange}
          />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onAnimationComplete={() => setIsAnimating(false)} // ანიმაციის დასრულების შემდეგ
            >
              <NavigationMenu closeMenu={() => setIsMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
