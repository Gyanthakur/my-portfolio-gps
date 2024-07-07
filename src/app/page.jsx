"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import AboutPage from "./about/page";
import Brain from "@/components/brain";
import { useRef } from "react";

import PortfolioPage from "./portfolio/page";
import ContactPage from "./contact/page";

const Homepage = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll({ container: containerRef });
	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 0.5 }}
		>
			<div className="h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-t from-blue-50 to-blue-100">
				{/* IMAGE CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 relative">
					<Image src="/gyanim13.png" alt="" fill className="object-contain" />
				</div>
				{/* TEXT CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
					{/* TITLE */}
					<h1 className="text-4xl md:text-6xl font-bold">
						Hi, I&apos;m Gyan Patap singh <br />{" "}
					</h1>
					<h1 className="text-1xl md:text-3xl">
						a Full Stack Developer from India.
					</h1>

					{/* DESC */}
					<p className="md:text-xl">
						I am a Full Stack Developer, and I am passionate about building
						scalable web applications. I have experience in building web
						applications using React, Node.js, and MongoDB. I am always looking
						to learn new technologies and improve my skills. I am currently
						looking for new opportunities to work on exciting projects.
					</p>
					{/* BUTTONS */}
					<div className="w-full flex gap-4 ">
						<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white mb-4 ">
							My Resume
						</button>
						<button className="p-4 rounded-lg ring-1 ring-black mb-4">
							Contact Me
						</button>
					</div>
				</div>
			</div>
			<div>
				{/* <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
					<Brain scrollYProgress={scrollYProgress} />
				</div> */}
				<AboutPage />
			</div>
			<div>
				<PortfolioPage />
			</div>
			<div>
				<ContactPage />
			</div>
		</motion.div>
	);
};

export default Homepage;
