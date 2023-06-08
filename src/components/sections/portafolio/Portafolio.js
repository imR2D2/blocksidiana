import React, { useState } from 'react';

import proyectoUnipoli from "../../../assets/img/portafolio/proyectoUnipoli.png";
import proyectoGimnasia from "../../../assets/img/portafolio/proyectoGimnasia.png"
import proyectoHotel from "../../../assets/img/portafolio/proyectoHotel.png"
import jargimnasia from "../../../assets/files/gimnasia.jar"
import jarhotel from "../../../assets/files/hotel.jar"


const Portafolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "", archivo: "", tipodescarga: "", contrasena: "" });

    const handleDownloadClick = (title, description, archivo, tipodescarga, contrasena) => {
        setShowModal(true);
	    setModalData({ title, description, archivo, tipodescarga, contrasena });
    };

    return (
        <div className=" dark:bg-black mt-1 w-full ">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-32 m-8">
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <a href="http://graduacion2021.epizy.com/inicio.php?i=2" target="_blank">
                <img src={proyectoUnipoli} alt="Proyecto Unipoli" class="w-full h-48 object-cover"/>   
                </a>
                <div class="p-4">
                    <h2 class="text-lg font-medium text-gray-800 mb-2">University Graduation Memberships</h2>  
                    <div class="flex flex-wrap gap-2 pt-2">
                        <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">PHP</div>
                        <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">JavaScript</div>
                        <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">CSS</div>
                        <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">AJAX</div>
                    </div>
                    <p class="text-gray-600 text-justify pt-5">University graduation system, where you can acquire your places through memberships.</p>
                </div>
            </div>
            
            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <a onClick={(e) => handleDownloadClick("Gymnastics Sales System", "If you want to test the system, you will have to download it as it is an executable .jar", jargimnasia, "gimnasia.jar", "User: admin - Password: 123") }>
                <img src={proyectoGimnasia} alt="Proyecto Gimnasia" class="w-full h-48 object-cover"/>
            </a>    
                <div class="p-4">
                    <h2 class="text-lg font-medium text-gray-800 mb-2">Gymnastics Sales System</h2>  
                    <div class="flex flex-wrap gap-2 pt-2">
                        <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">Java</div>
                    </div>
                    <p class="text-gray-600 text-justify pt-5">User and product management system for a gymnastics store, with payment method.</p>
                </div>
            </div>

            <div class="bg-white rounded-lg overflow-hidden shadow-lg">
                <a onClick={() => handleDownloadClick("Hotel", "If you want to test the system, you will have to download it as it is an executable .jar", jarhotel, "hotel.jar", "User: admin - Password: 123")}>
                    <img src={proyectoHotel} alt="Proyecto Hotel" class="w-full h-48 object-cover"/>
                </a>
                <div class="p-4">
                    <h2 class="text-lg font-medium text-gray-800 mb-2">Hotel Payment System</h2>  
                    <div class="flex flex-wrap gap-2 pt-2">
                        <div class="bg-bluee-200 text-white rounded-full py-1 px-2 text-xs">Java</div>
                    </div>
                    <p class="text-gray-600 text-justify pt-5">Payment system for hotel workers, where they are paid for the roles they perform.</p>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    <div className="bg-white p-8 rounded shadow z-50">
                    <div className="flex justify-end">
                        <button onClick={() => setShowModal(false)}>
                        <svg
                            className="w-6 h-6 fill-current text-gray-600 hover:text-gray-800"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fillRule="evenodd"
                            d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </button>
                    </div>
                    <p className="text-xl font-bold mb-2 text-center">More Information</p>                      
                    <p class="text-gray-600 text-justify pt-5">
                        {modalData.description}
                    </p>
                    <p class="text-gray-600 text-center pt-5 ">
                        {modalData.contrasena}                        
                    </p>
                    <div className="flex justify-center mt-6">
                        <a href={modalData.archivo} download={modalData.tipodescarga}>
                        <button type="button" className="text-sm border-2 rounded-full px-2 py-1 border-gray-700 dark:border-white ml-3 font-medium hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition dark: duration-300">
                            Download File
                        </button>
                    </a>
                    </div>
                    </div>
                </div>
                )
            }
        </div>
        </div>
    )
}

export default Portafolio