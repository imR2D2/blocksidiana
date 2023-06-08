import { NavLink, Link } from "react-router-dom"
import dosD from "../../assets/img/dosD.png"
import tresD from "../../assets/img/tresD.png"

const Spline = () => {
    return (

        <div className="md:flex justify-center items-center sm:block dark:bg-red-400">

            <div className='mt-20 mr-4 mb-20 w-60 p-4 border-2 px-2 py-1 border-gray-300 bg-white rounded-xl transform transition-all hover:translate-y-2 hover:border-gray-700'>
                <img className='' src={dosD}></img>
                <div className='flex justify-center'>
                    <h2 className="font-medium">DISEÑO 2D</h2>
                </div>
                
                <div className="flex justify-center m-6">
                    <NavLink to="/portafolio/dosD" type="button" className="flex justify-centertext-sm border-2 rounded-full px-2 py-1 border-gray-700 dark:border-white ml-3 font-medium hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition dark: duration-300">
                        Ver Diseños
                    </NavLink>
                </div>
            </div>

            <div className='mt-20 ml-4 mb-20 w-60 p-4 border-2 px-2 py-1 border-gray-300 bg-white rounded-xl transform transition-all hover:translate-y-2 hover:border-gray-700'>
                <img className='' src={tresD}></img>
                <div className='flex justify-center'>
                    <h2 className="font-medium">DISEÑO 3D</h2>
                </div>
                
                <div className="flex justify-center m-6">
                    <NavLink to="/portafolio/tresD" type="button" className="flex justify-centertext-sm border-2 rounded-full px-2 py-1 border-gray-700 dark:border-white ml-3 font-medium hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition dark: duration-300">
                        Ver Diseños
                    </NavLink>
                </div>
            </div>

        </div>
    

    )
}

export default Spline