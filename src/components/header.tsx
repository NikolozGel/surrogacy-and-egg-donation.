"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationMenu from "./navigationMenu";
import DesktopNavigationMenu from "./desktopNavigationMenu";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHamburgerMenuChange = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="mt-2">
      <nav className="relative">
        <div className="flex items-center justify-between lg:justify-evenly px-5">
          <Link href="/">
            <p className="text-4xl font-semibold text-teal-900">LifeLine</p>
          </Link>
          <DesktopNavigationMenu />
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
              style={{ overflow: "hidden" }} // საჭიროა სიმაღლის ანიმაციისთვის
              onAnimationComplete={() => setIsAnimating(false)} // ანიმაციის დასრულების შემდეგ
            >
              <NavigationMenu />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
