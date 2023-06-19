import React from "react";
import { Fade } from "@successtar/react-reveal";

export default function About() {
  return (
    <section id="aboutUs" className="overflow-hidden -mb-20 sm:-mb-44 bg-white dark:bg-gradient-to-b from-[black] to-[rgb(15,23,42)] py-20">
      <div className="p-2 md:p-12 lg:px-16 lg:py-24 mx-auto w-5/6">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
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
            We are a revolutionary blockchain-based platform dedicated to revolutionizing the ticketing industry. Our mission is to provide a seamless and secure experience for buying and selling event tickets. With the power of blockchain technology, we are tackling major challenges such as ticket duplication and counterfeit tickets, ensuring that every ticket transaction is transparent, traceable, and tamper-proof.
            <br/>
            <br/>
            Our user-friendly interface allows you to browse events, view seating arrangements, and choose your preferred seats hassle-free. You can also conveniently transfer tickets to friends or sell them securely within our platform's ticket exchange section.
            <br />
            <br/>
            Join us on our mission to revolutionize the ticketing industry. Experience the convenience, transparency, and trust that blockchain brings to the world of event ticketing. Say hello to a future where attending your favorite events is seamless, secure, and unforgettable.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
