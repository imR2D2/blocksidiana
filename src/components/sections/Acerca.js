import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaGit, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGnometerminal, SiJavascript, SiMysql, SiPowershell, SiReact, SiTailwindcss } from "react-icons/si";

import mee from "../../assets/img/me.jpeg"



const Acerca = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="bg-red-500 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
              Hi, I'm Arturo Hernández Bueno
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-xl text-justify">
            I'm a software engineering student looking for an opportunity
            to access the labor market and put into practice my acquired
            knowledge, so I can increase my professional experience in the
            technological field. 

            
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10 ml-12 sm:ml-40">
              <div className="flex items-center">
                <a href="https://github.com/imR2D2" target="_blank" className="text-lg font-medium text-gray-900 flex items-center">
                  <FaGithub className="text-black mr-2" size={24} />
                  <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
                </a>
              </div>
              <div className="flex items-center ml-[-22px] sm:ml-10">
                <a href="https://www.linkedin.com/in/arturo-hernández-bueno-fs/" target="_blank" className="text-lg font-medium text-gray-900 flex items-center">
                  <FaLinkedin className="text-blue-500 mr-2" size={24} />
                  <h3 className="text-lg font-medium text-gray-900">Linkedin</h3>
                </a>
              </div>
            </div>

          </div>
          <div className="mt-12 lg:mt-[-80px] lg:ml-26">
            <div className="flow-root">
              <img
                className="pt-4 lg:-pt-10 lg:-mt-14 w-64 h-160 rounded-md ring-4 ring-white mx-auto"
                src={mee}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 mt-[-22px] sm:mt-[-120px] mb-8 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              MY SKILLS
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="flex items-center">
                <FaHtml5 className="text-blue-500 mr-2" size={24} />
                <h3 className="text-lg font-medium text-gray-900">HTML</h3>
              </div>
              <div className="flex items-center">
                <FaCss3Alt className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">CSS3</h3>
              </div>
              <div className="flex items-center">
                <SiTailwindcss className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">Tailwind CSS</h3>
              </div>
              <div className="flex items-center">
                <SiJavascript className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">JavaScript</h3>
              </div>
              <div className="flex items-center">
                <SiReact className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">ReactJS</h3>
              </div>
              <div className="flex items-center">
                <FaPython className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">Python</h3>
              </div>
              <div className="flex items-center">
                <SiMysql className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">MySQL</h3>
              </div>
              <div className="flex items-center">
                <FaGit className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">Git</h3>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
              </div>
              <div className="flex items-center">
                <SiGnometerminal className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">Terminal</h3>
              </div>
              <div className="flex items-center">
                <SiPowershell className="text-blue-500 mr-2" size={30} />
                <h3 className="text-lg font-medium text-gray-900">PowerShell</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


    <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl text-center">EXPERIENCES</h2>
      <div className="mb-24">
        <ul
          class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
          data-te-stepper-init
          data-te-stepper-type="vertical">
          <li
            data-te-stepper-step-ref
            class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
            <div
              data-te-stepper-head-ref
              class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
              <span
                data-te-stepper-head-icon-ref
                class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                2
              </span>
              <span
                data-te-stepper-head-text-ref
                class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                G-Tech (Sep 2022 - Dec 2022)
              </span>
            </div>
            <div
              data-te-stepper-content-ref
              class="ps-20 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out text-justify">
                Development of an automated laboratory analysis platform for a regional client,
                applying new functionalities to the "Reagents" section, applying hight precision
                formulas for data processing.
            </div>
            <div class="flex flex-wrap gap-2 pt-2 ml-20 mb-5">
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">Jupyter</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">VueJS</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">Serverless</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">GraphQL</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">NuxtJS</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">Sequelize</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">ExpressJS</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">TailwindCSS</div>
            </div>
          </li>
          <li
            data-te-stepper-step-ref
            class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
            <div
              data-te-stepper-head-ref
              class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
              <span
                data-te-stepper-head-icon-ref
                class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                1
              </span>
              <span
                data-te-stepper-head-text-ref
                class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                EscolaresMX (May 2022 - Aug 2022)
              </span>
            </div>
            
            <div
              data-te-stepper-content-ref
              class="ps-20 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out text-justify">
                Development and implementation of improvement of the "Study Certificates" 
                section of the web page 
                <a> </a>
                <a href="https://escolaresmx.com" target="_blank" rel="noreferrer" className="font-bold">
                escolaresmx.com
                </a>
            </div>
            <div class="flex flex-wrap gap-2 pt-2 ml-20 mb-5">
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">JavaScript</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">JSON</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">PDFMake</div>
                <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">TinyMCE</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Acerca;