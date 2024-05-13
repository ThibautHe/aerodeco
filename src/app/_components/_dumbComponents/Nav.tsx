"use client";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [active, setActive] = useState(false);
  const handleMenuClick = () => {
    console.log(active);

    setActive(!active);
  };
  const menuBgVariants = {
    visible: { y: 0, display: "flex" },
    hidden: { y: "-100%" },
  };

  return (
    <motion.nav className="fixed flex w-full justify-between font-sans z-10 ">
      <Link href={"/"}>
        <div className="flex flex-col p-4 text-3xl font-light z-50">
          Aero <span className="pl-4">Deco</span>
        </div>
      </Link>
      <motion.div
        onClick={handleMenuClick}
        animate={active ? "open" : "closed"}
        className="relative z-50 flex-col gap-1 justify-center items-center w-20 h-20 p-4 cursor-pointer"
      >
        <motion.span
          style={{ top: "35%" }}
          variants={{ open: { rotate: "45deg", top: "50%" }, closed: {} }}
          className="absolute rounded-md bg-black h-2 w-9"
        ></motion.span>
        <motion.span
          style={{ top: "50%" }}
          variants={{ open: { height: 0, top: "50%" } }}
          className="absolute rounded-md bg-black h-2 w-9"
        ></motion.span>
        <motion.span
          style={{ top: "65%" }}
          variants={{ open: { rotate: "-45deg", top: "50%" } }}
          className="absolute rounded-md bg-black h-2 w-9"
        ></motion.span>
      </motion.div>

      <AnimatePresence>
        <motion.div
          variants={menuBgVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: [0.17, 0.33, 0.67, 0.83] }}
          className="absolute flex-col gap-16 flex justify-center items-center h-screen w-screen ellipse2 bg-blend-color-burn"
        >
          <ul>
            <li className="p-8 overflow-hidden test">
              <Link
                onClick={() => setActive(false)}
                href={"/realisations"}
                className="font-bold text-5xl"
              >
                Realisations
              </Link>
            </li>
            <li className="p-8 overflow-hidden test">
              <Link
                onClick={() => setActive(false)}
                href={"/#devis"}
                className="font-bold text-5xl"
              >
                Devis
              </Link>
            </li>
            <li className="p-8 overflow-hidden test">
              <Link
                onClick={() => setActive(false)}
                href={"/#contact"}
                className="font-bold text-5xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
}