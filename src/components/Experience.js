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
            time="Sep-Nov"
            address=" New York"
            work="Enhanced website functionality by developing and integrating custom WordPress plugins. Built scalable web applications using React.js, adhering to industry standards.Collaborated with the team to troubleshoot and resolve technical issues, ensuring project timelines were met. Documented processes and best practices to streamline future development workflows."
          />
          {/* <Details
            position="Frontend Intern"
            company="CollegeXConnect"
            time="Aug-Present"
            address=" Mountain View, CA"
            work="Working with a team passionate building a website for college students, making a better enivironment dfor students with solves their all problem and help in visualization of their skills in earning."
          /> */}
          <Details
            position="SDE Intern"
            company="WIC"
            time="March-Aug"
            address="Greater Noida"
            work="Designed and developed interactive web components using Bootstrap, improving user engagement. Utilized Git for version control to maintain and update the codebase efficiently. Participated in cross-functional team meetings to ensure alignment with project goals."
          />
          <Details
            position="Frontend Intern"
            company="Thought Bistro"
            time="2 Months"
            address=" Greater Kailash"
            work="Collaborated with company founders and a dedicated team to enhance project outcomes using HTML/CSS and JavaScript. Identified business challenges and bottlenecks, gaining insights into company operations and problem-solving strategies. Developed a website using Bootstrap and Tailwind CSS, enhancing lead generation capabilities for the company."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
