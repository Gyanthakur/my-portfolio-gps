"use client";

import React from "react";
import {
	FacebookLogo,
	GithubLogo,
	TwitterLogo ,
	WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";


const Footer = () => {
	return (
		<footer className="bg-gray-500 text-white py-4 text-center">
			<div className="social-media-icons flex flex-row justify-center items-center gap-8 ">
				<Link
					href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedinLogo size={30} className="hover:text-blue-600 hover:bg-black hover:rounded" />
				</Link>
				<Link
					href="https://github.com/Gyanthakur"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubLogo size={30} className="hover:text-blue-600 hover:bg-black hover:rounded"/>
				</Link>
				<Link
					href="https://twitter.com/gps_96169"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TwitterLogo size={30} className="hover:text-blue-600 hover:bg-black hover:rounded" />
				</Link>
				<Link
					href="https://www.facebook.com/profile.php?id=100026766931684"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookLogo size={30} className="hover:text-blue-600 hover:bg-black hover:rounded"/>
				</Link>
				<Link
					href="https://wa.me/918957818597"
					target="_blank"
					rel="noopener noreferrer"
				>
					<WhatsappLogo size={30} className="hover:text-blue-600 hover:bg-black hover:rounded"/>
				</Link>
			</div>
			<div className="py-4 text-center">
				<p>
					&copy; {new Date().getFullYear()} Gyan Pratap Singh. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
