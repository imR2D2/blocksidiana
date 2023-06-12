import { Link } from "react-router-dom"
import obsidiana from "../../assets/img/obsidian.png"

const ComingSoon = () =>{
    return (
<div class="h-screen bg-gradient-to-b from-[purple] to-[rgb(7,15,34)] flex flex-col items-center justify-center">
    <h1 class="text-5xl -mt-40 text-white font-bold mb-8 animate-pulse">
        Coming Soon
    </h1>
    <p class="text-white text-md sm:text-lg mb-8">
        Click the obsidian to return to the main page
    </p>
    <span className="z-20 absolute bg-whitee-900 right-auto top-64  rounded-full opacity-[80%] blur-3xl animate-pulse bg-gradient-to-br from-purple-200 to-purple-950 delay-700 duration-2000 aspect-square h-[300px]" />
    <Link to="/" className="md:ml-5 text-md py-2 px-4 border-none transition duration-800 text-black dark:text-whitee-900 flex items-center">
        
        <div className="z-40 w-60 h-7 mr-2">
            <img src={obsidiana} alt="" />
        </div>
    </Link>	
    
</div>

    )
}

export default ComingSoon