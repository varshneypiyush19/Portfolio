import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0  w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize  font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40 xs:my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Web development Intern"
            company="GAOTek"
            time="Sep-Present"
            address=" New York"
            work="Working with a team responsible for developing new features to websites, including improving the accuracy and relevance of search results and Learning new tools for Developing better SEO to websites."
          />
          <Details
            position="Frontend Intern"
            company="CollegeXConnect"
            time="Aug-Present"
            address=" Mountain View, CA"
            work="Working with a team passionate building a website for college students, making a better enivironment dfor students with solves their all problem and help in visualization of their skills in earning."
          />
          <Details
            position="SDE Intern"
            company="WIC"
            time="6 Months "
            address="Greater Noida"
            work="Worked on a team responsible for developing new features on websites, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Frontend Intern"
            company="Thought Bistro"
            time="2 Months"
            address=" Greater Kailash"
            work="Worked with a team which is passionate to be a Founder , Learned about what business faces problem ,what are the bottleneck for a company , Developed website and learned Lead generation  ."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;