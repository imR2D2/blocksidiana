//npm i react-simple-typewriter para el texto moviment
import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <main>
            <div className="relative z-30 px-6 lg:px-8 dark:bg-black">
                <div className="mx-auto max-w-3xl pt-20 pb-32 mt-14">
                    <div className="flex justify-center mt-14 text-4xl lg:justify-between">
                        <div>
                            <h1 className="mt-6 font-semibold tracking-tight text-center text-3 sm:text-6xl text-black dark:text-white">
                                I'm <span></span>
                                <Typewriter
                                    words={['Arturo!', 'R2D2', 'Turito']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={150}
                                    deleteSpeed={80}
                                    delaySpeed={1000}
                                    //onLoopDone={handleDone}
                                    //onType={handleType}
                                />
                            </h1>

                            <p className="mt-8 text-sm leading-8 text-gray-600 dark:text-gray-400">
                                A Software Engineering Student <span className="font-bold text-black dark:text-gray-300 ">From México</span>
                            </p>
                            <Link to="/about">
                                <div className="mb-8 flex justify-center">
                                    <div className="mt-24 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-300 hover:ring-gray-400 dark:ring-gray-600 dark:hover:ring-gray-300">
                                        <span className="text-gray-600 dark:text-gray-300">
                                        More Information{' '}
                                        <a href="#" className="font-semibold text-indigo-600">
                                            <span className="absolute inset-0" aria-hidden="true" />Read More <span aria-hidden="true">&rarr;</span>
                                        </a>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
          
                        
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <svg
                                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                viewBox="0 0 1155 678"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                />
                                <defs>
                                <linearGradient
                                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC" />
                                    <stop offset={1} stopColor="#FF80B5" />
                                </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Header