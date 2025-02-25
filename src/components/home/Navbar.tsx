import { useState } from "react";

// react icons
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { FaCubesStacked } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import logo from "../../assets/images/logo/logo.png";

const ResponsiveNavbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative h-auto shadow-md p-4 bg-base-100">
      {/* logo */}
      <img src={logo} alt="logo" className="w-[60px] " />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
          home
        </li>

        {/* about us mega menu */}
        <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
          about us
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>

            <img
              src="https://i.ibb.co/YRgsrsh/AD22-04.png"
              alt="image"
              className="w-full object-cover mt-4 rounded-sm h-[150px]"
            />
          </article>
        </li>

        {/* service mega menu */}
        <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
          services
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>

            <img
              src="https://i.ibb.co/YRgsrsh/AD22-04.png"
              alt="image"
              className="w-full object-cover mt-4 rounded-sm h-[150px]"
            />
          </article>
        </li>
      </ul>

      {/* user account */}
      <div className="flex items-center gap-[15px]">
        <div
          className="flex items-center gap-[10px] cursor-pointer relative"
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
        >
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
              alt="avatar"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
          </div>

          <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">
            Dhon Deo
          </h1>

          <div
            className={`${
              accountMenuOpen
                ? "translate-y-0 opacity-100 z-[1]"
                : "translate-y-[10px] opacity-0 z-[-1]"
            } bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
          >
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <FiUser />
              View Profile
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <IoSettingsOutline />
              Settings
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <FiUser />
              View Profile
            </p>

            <div className="mt-3 border-t border-gray-200 pt-[5px]">
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
                <TbLogout2 />
                Logout
              </p>
            </div>
          </div>

          <IoIosArrowUp
            className={`${
              accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
            } transition-all duration-300 text-gray-600 sm:block hidden`}
          />
        </div>

        <CiMenuFries
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[1.8rem] text-[#424242]c cursor-pointer md:hidden flex"
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            Home
          </li>

          <li
            onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            About Us
            <IoIosArrowDown
              className={`${
                mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* about us mega menu */}
          <div
            className={`${
              mobileAboutUsOpen ? "block" : "hidden"
            } group font-[500] ml-6`}
          >
            <ul className="flex flex-col gap-[7px] text-[#424242]">
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" /> Office
                Tour
              </li>
            </ul>

            <div className="flex flex-col gap-[10px] mt-4">
              <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                Full Customize
              </div>

              <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                Modern Design
              </div>

              <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                Well Stacktured
              </div>
            </div>
          </div>

          <li
            onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Service
            <IoIosArrowDown
              className={`${
                mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* service mega menu */}
          <div
            className={`${
              mobileServiceOpen ? "hidden" : "block"
            } font-[500] ml-6`}
          >
            <ul className="flex flex-col gap-[7px] text-[#424242]">
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" /> Office
                Tour
              </li>
            </ul>

            <div className="flex flex-col gap-[10px] mt-4">
              <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                Full Customize
              </div>

              <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                Modern Design
              </div>

              <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                Well Stacktured
              </div>
            </div>
          </div>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
