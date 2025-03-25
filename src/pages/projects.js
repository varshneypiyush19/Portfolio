import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import FeaturedProject1 from "../../public/images/projects/bistross.png";
import Project1 from "../../public/images/projects/farawayss.png";
import Project2 from "../../public/images/projects/pizzass.png";
import Project3 from "../../public/images/projects/splitbillss.png";
import FeaturedProject2 from "../../public/images/projects/portfolioss.png";
import Project4 from "../../public/images/projects/amazonss.png";
import FeaturedProject3 from "../../public/images/projects/ytss.png";
import FeaturedProject4 from "../../public/images/projects/frienz.png";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className=" relative shadow-2xl w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light  dark:border-light dark:bg-dark p-6 xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark  font-medium text-xl lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>{" "}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Porfolio | Projects Page</title>
        <meta name="description" content="Piyush Varshney Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedText
            text=" Imagination Trumps Knowledge!"
            className="mb-16 leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio"
                img={FeaturedProject2}
                summary="Developed a dynamic portfolio website showcasing projects, skills, education, resume, and contact details.
                          Designed a responsive interface with smooth animations using Framer Motion to enhance user experience.
                          Integrated a functional contact form with Formspring for seamless user communication.
      "
                link="/"
                github="https://github.com/varshneypiyush19"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Frienz"
                img={FeaturedProject4}
                summary="Built a real-time chat app with Socket.IO for instant messaging and a responsive React front-end.
                         Developed a scalable Node.js/Express.js back-end and integrated MongoDB for secure user data and chat storage.
                         Deployed the front-end on Vercel and back-end on Render, ensuring optimized performance and seamless operation."
                link="https://frienz.vercel.app"
                github="https://github.com/varshneypiyush19/Chat-app"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Travel List"
                img={Project1}
                link="https://travel-list-by-piyush.netlify.app/"
                github="https://github.com/varshneypiyush19"
                type=" Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pizza Menu"
                img={Project2}
                link="https://pizza-menu-by-piyush.netlify.app/"
                github="https://github.com/varshneypiyush19"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Thought Bistro"
                img={FeaturedProject1}
                summary="Built a lead generation platform with an intuitive and responsive interface to improve business outreach.
                          Integrated Google Sheets as a backend to collect and manage user data effectively.
                          Role: Full Stack Developer, handling both front-end and back-end implementation.
                          "
                link="https://thethoughtbistro-git-main-piyush-varshneys-projects.vercel.app/"
                github="https://github.com/varshneypiyush19"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Split Bill"
                img={Project3}
                link="https://eat-n-split-by-piyush.netlify.app/"
                github="https://github.com/varshneypiyush19"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Amazon Clone"
                img={Project4}
                link="https://varshneypiyush19.github.io/Amazon-Clone/"
                github="https://github.com/varshneypiyush19"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Youtube Clone"
                img={FeaturedProject3}
                summary="A Youtube Clone website made using HTML, CSS, Javascript. 
                           "
                link="https://varshneypiyush19.github.io/Youtube-Clone/"
                github="https://github.com/varshneypiyush19"
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Amazon Clone"
                img={Project5}
                link="https://varshneypiyush19.github.io/Amazon-Clone/"
                github="https://github.com/varshneypiyush19"
                type="Project"
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="https://github.com/varshneypiyush19"
                type="Featured Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
