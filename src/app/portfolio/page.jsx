"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Notes-Store",
    desc: "This is a notes store app built in Next.js and Tailwind CSS. It is a simple app that allows you to create, read, update and delete notes. and it also has a dark mode feature. hotsing your notes feature is also available.",
    img: "/notes_store.png",
    link: "https://notes-store-app.vercel.app",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Text Editor",
    desc: "this is a text editior app built in react and tailwind css. it is a simple app that allows you to create, read, update and delete text. and it also has a dark mode feature.",
    img: "/text_utils.png",
    link: "https://gyanthakur.github.io/TextUtils/",
  },
  {
    id: 3,
    color: "from-red-300 to-blue-300",
    title: "Portflio-v1",
    desc: "This is my first portfolio website built in html css and javascript. it is a simple website that shows my skills, projects, and credentials .",
    img: "/portfolio-v1.png",
    link: "https://portfolio-gyanthakur.vercel.app/",
  },
  {
    id: 4,
    color: "from-red-300 to-blue-300",
    title: "portfolio-v2",
    desc: "This is my second portfolio website built in html css and javascript. it is a simple website that shows my skills and projects.",
    img: "/portfolio-v2.png",
    link: "https://gyanthakur.github.io/portfolio-gps/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "music-player",
    desc: "This is a notes store app built in Next.js and Tailwind CSS. It is a simple app that allows you to create, read, update and delete notes. and it also has a dark mode feature. hotsing your notes feature is also available.",
    img: "/music-player.png",
    link: "https://gyanthakur.github.io/mini-spotify/",
  },
  
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col h-full gap-8 text-white font-serif ">
                  <h1 className="text-xl font-bold md:text-2xl  text-white xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] flex justify-center items-center mb-5">
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded flex justify-center items-center">See Demo</button>
                  </Link>
                  <p >
                    {item.desc}
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>



      <div className="w-screen h-screen flex flex-col gap-16 mt-12 items-center justify-center text-center">
        <h1 className="text-8xl">These are my Projects</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and Problem Solver
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-blue-700 text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <div>
        <footer/>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
