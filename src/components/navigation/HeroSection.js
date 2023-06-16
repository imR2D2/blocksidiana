import React from "react";	
import { Fade } from "@successtar/react-reveal";
import { Link } from "react-router-dom";
import jua from "../../assets/img/bottonPlay.svg"
import obsidiana from "../../assets/img/LogoHexagon.png"

export default function HeroSection() {
		//Scroll para seccion Presentation
		const scrollToSection = (sectionId) => {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		}
	return (
		<section className='relative pt-[140px] bg-opacity-5 pb-24 bg-white dark:bg-black'>
			<span className="z-20 absolute bg-purplee-400 right-16 sm:right-28 top-30 sm:top-36 opacity-[20%] dark:opacity-[4%] sm:opacity-[70%] h-[320px] sm:h-[450px] rounded-full blur-3xl animate-pulse bg-gradient-to-br from-primary to-secondary delay-700 duration-2000 aspect-square" />
			<div className="relative">
				<img
					src={obsidiana}
					alt="Imagen superpuesta"
					className="z-40 absolute top-16 right-36 w-80 hidden xl:block"
				/>
			</div>

			<div className="container px-4 mx-auto grid md:grid-cols-2">
				<div className="flex items-center">
					<div className="relative">
						<Fade left>
							<p className="text-center md:text-left text-lg text-purplee-800 font-semibold">SIGN UP TODAY</p>

							<h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold leading-normal dark:text-whitee-900">
								Discover extraordinary <br />
								events with <br />
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-purplee-400 to-purplee-800">
									Blocksidian
								</span>
							</h1>

							<div className="mt-4 mb-8 flex text-center md:text-left">
								<p className="text-gray dark:text-whitee-900 ">
									Buy, sell and enjoy your tickets with total confidence and
									transparency!
								</p>
							</div>
							<div className="flex justify-center">
								<Link to="/comingsoon" className="bg-purplee-400 text-md py-2 px-4 border-none rounded-md hover:bg-purplee-800 transition duration-800 text-whitee-900">
									More Information
								</Link>

								<button onClick={() => scrollToSection("presentation")} className="md:ml-5 text-md py-2 px-4 border-none transition duration-800 text-black dark:text-whitee-900 flex items-center">
									<div className="w-7 h-7 mr-2">
									<img src={jua} className="w-full h-full" alt="Presentation" />
									</div>
									Presentation
								</button>
							</div>

						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
}
