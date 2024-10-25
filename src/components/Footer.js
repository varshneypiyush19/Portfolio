import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 borer-solid border-dark dark:border-light dark:text-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 xs:p-4">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by &nbsp;
          <Link
            href="https://www.linkedin.com/in/piyushvarshney19/"
            className="underline underline-offset-4"
            target={"_blank"}
          >
            Piyush Varshney
          </Link>
        </div>
        <Link href="/" target={"_blank"}>
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
