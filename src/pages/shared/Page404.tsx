import { useNavigate } from "react-router-dom";



const Page404 = () => {

    const navigate = useNavigate();

    return (
        <div className="boxShadow px-10 w-full flex items-center flex-col justify-center h-screen py-20 rounded-xl">
            <img src="https://i.ibb.co/SVMTKPy/Frame-5.png" alt="illustration"
                 className="w-full lg:w-[400px]"/>
            <p className="text-[#73718A] text-[0.9rem] sm:text-[1.2rem] w-full lg:w-[55%] text-center mt-10 lg:mt-4">The
                page cannot be found. The requested
                URL was not found on this server.</p>

            <button
                onClick={() => navigate("/")}
                className="py-3 px-8 rounded-full bg-purple-600 text-white mt-8 hover:cursor-pointer hover:bg-blue-400 hover:ease-in-out transition duration-500"
            >
                Back to home
            </button>
        </div>
    );
};

export default Page404;
                    