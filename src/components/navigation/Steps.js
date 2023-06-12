import React from "react";

import signupImage from "../../assets/img/illustrations/signup.png";
import walletImage from "../../assets/img/illustrations/wallet.png";
import okayImage from "../../assets/img/illustrations/okay.png";
import arrow from "../../assets/img/arrow.svg";
import { Fade } from "@successtar/react-reveal";

export default function StepSection() {
	return (
		<section className="px-6 bg-white dark:bg-slatee-900">
			<div className="rounded-3xl py-20">
				<div className="container mx-auto text-center">
					<h2 className="font-bold text-2xl sm:text-4xl mb-6 leading-normal text-black dark:text-whitee-900">
						Get started in just a few minutes
					</h2>
					<div className="md:flex justify-center gap-20">
						<Fade up>
							<div className="text-center relative px-4">
								<div className="relative">
									<img
										src={signupImage}
										className="mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
										alt=""
									/>
									<img
										src={arrow}
										alt=""
										className="hidden md:block absolute top-1/2 -right-36"
									/>
								</div>
								<h3 className="text-2xl font-bold mb-4 text-black dark:text-whitee-900">Sign Up</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Buy Bitcoin or Ethereum, then securely store it in your Wallet
									or send it on easily to friends.
								</p>
							</div>
						</Fade>
						<Fade up delay={500}>
							<div className="text-center relative px-4">
								<div className="relative">
									<img
										src={walletImage}
										className="mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
										alt=""
									/>
									<img
										src={arrow}
										alt=""
										className="hidden md:block absolute top-1/2 -right-36"
									/>
								</div>
								<h3 className="text-2xl font-bold mb-4 text-black dark:text-whitee-900">Fund</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Choose your preferred payment method such as bank transfer or
									credit card to top up your NEFA Wallet.
								</p>
							</div>
						</Fade>
						<Fade up delay={1000}>
							<div className="text-center relative px-4">
								<img
									src={okayImage}
									className="mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
									alt=""
								/>
								<h3 className="text-2xl font-bold mb-4 text-black dark:text-whitee-900">Buy Crypto</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Sign up for your free NEFA Wallet on web, iOS or Android and
									follow our easy process to set up your profile.
								</p>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
}
