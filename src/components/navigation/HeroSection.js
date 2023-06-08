import React from "react";	
import { Fade } from "@successtar/react-reveal";

export default function HeroSection() {
	return (
		<section className="relative bg-primary pt-[140px] bg-opacity-5 pb-24">
			<span className="absolute bg-purple-400 right-24 top-25 rounded-full opacity-[70%] blur-3xl -z-10 animate-pulse bg-gradient-to-br from-primary to-secondary delay-700 duration-2000 aspect-square h-[450px]" />
			<div className="container px-4 mx-auto grid md:grid-cols-2">
				<div className="flex items-center">
					<div className="relative">
						<Fade left>
							<p className="text-primary text-purple-800">SIGN UP TODAY</p>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal dark:text-whitee-900">
								Discover extraordinary <br />
								events with <br />
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
									Blocksidian
								</span>
							</h1>

							<div className="mt-4 mb-8">
								<p className="text-gray dark:text-whitee-900">
									Buy, sell and enjoy your tickets with total confidence and
									transparency!
								</p>
							</div>
							<div className="col-span-2 lg:flex gap-4 lg:mb-12">
								<button className="bg-purple-400 ml-32 py-2 px-4 border-none rounded-md hover:bg-purple-800 transition duration-800 text-white">
									More Information
								</button>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
}
