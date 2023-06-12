import React from "react";
import { Fade } from "@successtar/react-reveal";

export default function About() {
  return (
    <section className="overflow-hidden bg-whitee-700 dark:bg-slatee-900 py-20 sm:grid sm:grid-cols-2">
      <div className="relative">
        <Fade duration={2000}>
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="mx-auto md:ml-8 h-full w-80 md:w-full object-cover"
        />
        </Fade>
      </div>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <Fade duration={2000}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-whitee-900 md:text-4xl">
              About
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purplee-400 to-purplee-800">
                Blocksidian
              </span>
            </h2>
          </Fade>

          <Fade duration={2500}>
            <p className="text-justify text-base mt-4 md:text-lg md:mt-4 md:block text-grayy-600 dark:text-grayy-300">
              We are a revolutionary blockchain-based platform that seeks to transform
              the ticketing industry. Our main goal is to offer you a secure and reliable
              experience when buying and selling event tickets. With our innovative technology
              and the backing of the blockchain, we are eliminating ticket duplication and combating
              counterfeit tickets, giving you total peace of mind when attending your favorite events.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
