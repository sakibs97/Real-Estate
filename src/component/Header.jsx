import logo from "../assets/logo.png"
import { IoCall } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [show, setShow] = useState(false)
    let [showMyMenu, setShowMyMenu] = useState(false)
    let [showProject, setShowProject] = useState(false)
    let [showGallery, setShowGallery] = useState(false)
    let [showContact, setShowContact] = useState(false)

    let handelShow = () => {
        setShow(!show)
    }

    let handelMenuShow = () => {
        setShowMyMenu(!showMyMenu)
    }

    let handelProjectShow = () => {
        setShowProject(!showProject)
    }

    let handelGalleryShow = () => {
        setShowGallery(!showGallery)
    }

    let handelContactShow = () => {
        setShowContact(!showContact)
    }

    return (
        <section className="">
            <nav className="bg-[rgb(0,0,0,.7)] fixed w-full lg:px-[10px] z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:p-0">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse z-20">
                        <img src={logo} alt="logo" className="w-[80px] h-[40px] ml-8 lg:ml-0" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <h6 className="cursor-pointer text-white font-suse font-medium text-[16px] flex items-center py-[6px] px-[25px] border z-20"><IoCall className="mr-3" />
                            12345</h6>
                        <div onClick={handelShow} className="inline-flex lg:hidden cursor-pointer z-20 items-center p-2 justify-center text-sm text-gray-500">
                            {show ? (
                                <ImCross className="w-6 h-6 text-white" />
                            ) : (
                                <GiHamburgerMenu className="w-6 h-6 text-white" />
                            )}
                        </div>
                    </div>
                    <div className={`items-center justify-between lg:static w-full block lg:w-auto md:order-1 absolute lg:z-50 ${show ? "top-0 pt-20 px-4 left-0 bg-blue-500 duration-500 lg:bg-none lg:pt-0" : "left-[-2000px] top-[200]"}`} id="navbar-sticky">
                        <ul className="lg:leading-[50px] leading-8 flex flex-col lg:flex-row mt-4 font-medium md:space-x-8 rtl:space-x-reverse  md:mt-0">
                            <li className="relative">
                                <Link to="/" className="hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 text-white font-suse font-medium text-[16px]" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="relative group">
                                <div className="flex justify-between items-center">
                                    <Link to="/about-us" className={`hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 lg:text-white  font-suse font-medium text-[16px] ${showMyMenu ? "text-red-600" : "text-white"}`} aria-current="page">
                                        About
                                    </Link>
                                    <div className="lg:hidden cursor-pointer" onClick={handelMenuShow}>
                                        {showMyMenu ? (
                                            <RxCross2 className="w-6 h-6 text-white" />
                                        ) : (
                                            <GoPlus className="w-6 h-6 text-white" />

                                        )}
                                    </div>
                                </div>
                                <ul className={`font-suse font-normal text-[15px] text-white lg:absolute lg:left-0 lg:top-[66px] lg:bg-[rgb(0,0,0,.7)] group-hover:block lg:hidden w-[200px] lg:px-6 ${showMyMenu ? "relative duration-700 ml-5" : "absolute left-[1000px] top-0 duration-700"}`}>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500 lg:border-b-[1px] border-[#a5a4a4]">Our Team</li>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500 lg:border-b-[1px] border-[#a5a4a4]">Privacy Policy</li>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500">Edison Royal Club</li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div className="flex justify-between items-center">
                                    <a href="#" className={`hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 lg:text-white font-suse font-medium text-[16px] ${showProject ? "text-red-600" : "text-white"}`} aria-current="page">
                                        Projects
                                    </a>
                                    <div className="lg:hidden cursor-pointer" onClick={handelProjectShow}>
                                        {showProject ? (
                                            <RxCross2 className="w-6 h-6 text-white" />
                                        ) : (
                                            <GoPlus className="w-6 h-6 text-white" />

                                        )}
                                    </div>
                                </div>
                                <ul className={`font-suse font-normal text-[15px] text-white lg:absolute lg:left-0 lg:top-[66px] lg:bg-[rgb(0,0,0,.7)] group-hover:block lg:hidden w-[200px] lg:px-6 ${showProject ? "relative duration-700 ml-5" : "absolute left-[1000px] top-0 duration-700"}`}>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500 lg:border-b-[1px] border-[#a5a4a4]">Ongoing</li>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500 lg:border-b-[1px] border-[#a5a4a4]">Upcoming</li>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500">Completed</li>
                                </ul>
                            </li>
                            <li className="relative">
                                <a href="#" className="hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 text-white font-suse font-medium text-[16px]" aria-current="page">
                                    Blog
                                </a>
                            </li>
                            <li className="relative group">
                                <div className="flex justify-between items-center">
                                    <a href="#" className={`hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 lg:text-white font-suse font-medium text-[16px] ${showGallery ? "text-red-600" : "text-white"}`} aria-current="page">
                                        Gallery
                                    </a>
                                    <div className="lg:hidden cursor-pointer" onClick={handelGalleryShow}>
                                        {showGallery ? (
                                            <RxCross2 className="w-6 h-6 text-white" />
                                        ) : (
                                            <GoPlus className="w-6 h-6 text-white" />

                                        )}
                                    </div>
                                </div>
                                <ul className={`font-suse font-normal text-[15px] text-white lg:absolute lg:left-0 lg:top-[66px] lg:bg-[rgb(0,0,0,.7)] group-hover:block lg:hidden w-[200px] lg:px-6 ${showGallery ? "relative duration-700 ml-5" : "absolute left-[1000px] top-0 duration-700"}`}>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500 lg:border-b-[1px] border-[#a5a4a4]">Newsletter</li>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500 lg:border-b-[1px] border-[#a5a4a4]">Image Gallery</li>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500">Video Gallery</li>
                                </ul>
                            </li>
                            <li className="relative">
                                <a href="#" className="hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 text-white font-suse font-medium text-[16px]" aria-current="page">
                                    Career
                                </a>
                            </li>
                            <li className="relative group">
                                <div className="flex justify-between items-center">
                                    <a href="#" className={`hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 lg:text-white font-suse font-medium text-[16px] ${showContact ? "text-red-600" : "text-white"}`} aria-current="page">
                                        Contact
                                    </a>
                                    <div className="lg:hidden cursor-pointer" onClick={handelContactShow}>
                                        {showContact ? (
                                            <RxCross2 className="w-6 h-6 text-white" />
                                        ) : (
                                            <GoPlus className="w-6 h-6 text-white" />

                                        )}
                                    </div>
                                </div>
                                <ul className={`font-suse font-normal text-[15px] text-white lg:absolute lg:left-0 lg:top-[66px] lg:bg-[rgb(0,0,0,.7)] group-hover:block lg:hidden w-[200px] lg:px-6 ${showContact ? "relative duration-700 ml-5" : "absolute left-[1000px] top-0 duration-700"}`}>
                                    <li className="hover:tracking-widest lg:hover:tracking-normal duration-500">Suggestion</li>
                                </ul>
                            </li>
                            <li className="relative">
                                <a href="#" className="hover:tracking-widest lg:hover:tracking-normal duration-500 menu-bar block py-2 px-3 lg:px-0 text-white font-suse font-medium text-[16px]" aria-current="page">
                                    Landowner
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
}

export default Header