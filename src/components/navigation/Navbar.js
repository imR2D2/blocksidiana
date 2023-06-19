//Fragment viene de HeadlessUI como Poper
import { useState, Fragment } from "react";
//Agrega la clase active, mientras que LINK no
import { NavLink, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";

import DarkModeSwitch from "../items/DarkMode";	
import obsidiana from "../../assets/img/logoBlack.png"
import obsidianaBlanco from "../../assets/img/logoWhite.png"


const Navbar = () => {
	//Scroll para seccion About
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}
	
	//Activar Scroll
	window.onscroll = function () {
		scrollFunction();
	};
	const scrollFunction = () => {
		if (document.getElementById("navbar")) {
			//Cuanta en N el scroll
			console.log(document.body.scrollTop);
			if (
				document.body.scrollTop > 50 ||
				document.documentElement.scrollTop > 50
			) {
				document.getElementById("navbar").classList.add("shadow-navbar");
				document.getElementById("navbar").classList.add("bg-white");
			} else {
				document.getElementById("navbar").classList.remove("shadow-navbar");
				document.getElementById("navbar").classList.remove("bg-white");
			}
		}
	};

	const [open, setOpen] = useState(false);

	return (
		<div
			id="navbar"
			className="fixed bg-white dark:bg-black w-full top-0 z-50 px-4 py-3 transition duration-300"
		>
			<div className="ml-6 -mt-2 flex flex-wrap items-center sm:flex-nowrap">
				<Link to="/" className="-ml-4 mt-2 flex flex-1">
					<img src={obsidiana} className="block dark:hidden ml-0 sm:ml-8 w-28 sm:w-32"></img>
					<img src={obsidianaBlanco} className="hidden dark:block ml-0 sm:ml-8 w-28 sm:w-32"></img>
				</Link>

				<div id="menu" className="hidden md-1:block ml-4 mt-2 flex-shrink-0">
					<NavLink to="/" className="navBar">
						Home
					</NavLink>
					<NavLink onClick={() => scrollToSection("aboutUs")} className="navBar">
						About Us
					</NavLink>
					<NavLink to="/contact" className="navBar">
						Contact
					</NavLink>
					<a download="" href="">
						<button
							type="button"
							className="text-sm border-2 rounded-full px-6 py-1.5 ml-3 font-medium text-purplee-400 border-purplee-400 hover:bg-purplee-800 hover:border-purplee-800 hover:text-whitee-900 dark:hover:text-black dark:text-whitee-900 transition duration-700"
						>
							Sign Up
						</button>
					</a>
					<a download="CV_Arturo Hernández Bueno" href="">
						<button
							type="button"
							className="text-sm border-2 rounded-full px-8 py-2 ml-3 border-none font-medium text-whitee-900 bg-purplee-400 hover:bg-purplee-800 transition duration-700"
						>
							Log In
						</button>
					</a>
				</div>

				<div className="mt-3 ml-5">
					<DarkModeSwitch />
				</div>

				<Popover className="relative">
				<Popover.Button className="block md-1:hidden focus:ring-none focus:outline-none mt-2.5 ml-3">
					{open ? (
						<svg onClick={() => {setOpen(false);}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(107,33,168)" className="w-7 h-7">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg onClick={() => {setOpen(true);}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(107,33,168)" className="w-7 h-7">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					)}
				</Popover.Button>



					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>	
						<Popover.Panel className="absolute -right-5 z-10 mt-2 w-screen">			
							<div class="text-center block lg:hidden w-full border-b-2 border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 h-48">
								<br/>
								<NavLink to="/" className="text-lg hover:text-xl hover:font-semibold duration-500 text-black dark:text-whitee-900">
									Home
								</NavLink>
								<br/>
								<br/>
								
								<NavLink onClick={() => scrollToSection("aboutUs")} className="text-lg hover:text-xl hover:font-semibold duration-500 text-black dark:text-whitee-900">
									About Us
								</NavLink>
								<br/>
								<br/>
								
								<NavLink to="/contact" className="text-lg hover:text-xl hover:font-semibold duration-500 text-black dark:text-whitee-900">
									Contact
								</NavLink>
								<br/>
								<br/>
								
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</div>
	);
};

export default Navbar