import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 lg:right-8 lg:left-auto lg:bottom-0  sm:right-0 flex items-center justify-center overflow-hidden ">
      <div className="w-44 h-auto flex items-center justify-center relative lg:w-32 md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:varshneypiyush2004@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light lg:w-16 lg:h-16 md:w-12 md:h-12 lg:text-[10px] "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
