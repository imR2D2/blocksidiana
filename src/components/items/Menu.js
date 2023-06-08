import { Popover, Transition } from '@headlessui/react'
import { useState, Fragment } from "react"


const Menu = () => {
    const solutions = [
        {
            name: 'Inicio',
            description: 'Measure actions your users take',
            href: '/inicio',
            icon: IconOne,
        },
        {
            name: 'About',
            description: 'Create your own targeted content',
            href: '/about',
            icon: IconTwo,
        },
        {
            name: 'Blog',
            description: 'Keep track of your growth',
            href: '/blog',
            icon: IconThree,
        },
        {
            name: 'Portafolio',
            description: 'Keep track of your growth',
            href: '/portafolio',
            icon: IconThree,
        },
        {
            name: 'Contacto',
            description: 'Keep track of your growth',
            href: '/contacto',
            icon: IconThree,
        },
    ]
==
    const [open, setOpen] = useState(false)

    function IconOne() {
        return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
            d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
            stroke="#FB923C"
            strokeWidth="2"
            />
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
            stroke="#FDBA74"
            strokeWidth="2"
            />
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
            stroke="#FDBA74"
            strokeWidth="2"
            />
        </svg>
        )
    }
    
    function IconTwo() {
        return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <path
            d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
            stroke="#FB923C"
            strokeWidth="2"
            />
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
            stroke="#FDBA74"
            strokeWidth="2"
            />
        </svg>
        )
    }
    
    function IconThree() {
        return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" rx="8" fill="#FFEDD5" />
            <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
            <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
            <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
            <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
            <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
            <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
        </svg>
        )
    }


    return (
        <Popover className="relative">   
            <Popover.Button className="block md-1:hidden focus:ring-none focus:outline-none mt-2.5 ml-3">  
                {
                open ?
                <img onClick={() => {setOpen(false)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAN9JREFUSEvtleENAiEMRt9NoJvoCLqJG6gTOYKucBs4im5gvgQSEu+4VlD8Ab+bPvpoy0CjMzTi0sE/M99V/5XqNXAFzsB94WYH4AjsgUcu1vLGgm1CIiWcgwt6CbAR2JWC04SqYgqexjwDNGvHUrEunoO7oUpoBc/Bt4leU6VRvwc8BVfj6big3orjZVO1H0FrgecaLjt5JaqldxWyu+Ee8FT3ps3lglvBuZGxzPmbdgvYMqduuAUcV+bSyFRfmZrVG3AyfhKK054u/iS+8lVaVHdwFQNddRWNliTNVL8A3XRCH6P6Iy4AAAAASUVORK5CYII="/>
                :
                <img onClick={() => {setOpen(true)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAG9JREFUSEvtlckNwCAQA01nlEY6g8qC9rEfjigPKyBiF+CRRoYNWJSwiAuBPzMv1a46AbiJ3q+2a6aaCTVmx9kOTLQ8rtKq3Uskr7po1bNxmWpm8lvVTOiwS8/Jtfzvr7azyEzXp3Ex9T52SfX5qisn1AwfJnWg+AAAAABJRU5ErkJggg=="/>
                }
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
            <Popover.Panel className="absolute -left-24 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        {solutions.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                                {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {item.description}
                            </p>
                            </div>
                        </Link>
                        ))}

                    </div>
                    <div className="bg-gray-50 p-4 flex justify-center">
                        <a download='CV_Arturo Hernández Bueno' href={cv}>
                            <button type="button" className="text-sm border-2 rounded-full px-2 py-1 border-gray-700 dark:border-white ml-3 font-medium hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition dark: duration-300">
                                Descargar CV
                            </button>
                        </a>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
    )
}

export default Menu




//Funciones de Iconos
