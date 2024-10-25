import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center mt-4 ">
        <MotionLink
          href="/"
          className=" w-16 h-16 bg-dark text-light flex items-center border border-solid border-transparent  dark:border-light justify-center rounded-full text-2xl sm:text-xl sm:w-12 sm:h-12 font-bold"
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          PV
        </MotionLink>
      </div>
      <div className="flex items-center justify-center mt-4 pl-4 text-3xl italic xl:hidden lg:flex ">
        Portfolio
      </div>
    </div>
  );
};

export default Logo;
