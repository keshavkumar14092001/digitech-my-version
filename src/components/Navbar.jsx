import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/Img/newLogo.jpg";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-transparent/70 shadow fixed z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-[100rem] md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className='bg-white border rounded-md shadow-md p-5 hover:shadow-xl transition'>
                            <Link to={'/'}>
                                <img
                                    src={Logo}
                                    className="w-[100px]"
                                    alt="Digitech"
                                />
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-16 md:space-y-0">
                            <Link to={'/'}>
                                <li className="text-white pb-4 md:pb-0 lg:text-xl lg:font-semibold hover:text-purple-500 transition">
                                    <h1>Home</h1>
                                </li>
                            </Link>
                            <Link to={'/about'}>
                                <li className="text-white pb-4 md:pb-0 lg:text-xl lg:font-semibold hover:text-purple-500 transition">
                                    <h1>About</h1>
                                </li>
                            </Link>
                            <Link to={'/services'}>
                                <li className="text-white pb-4 md:pb-0 lg:text-xl lg:font-semibold hover:text-purple-500 transition">
                                    <h1>Service</h1>
                                </li>
                            </Link>
                            <Link to={'/carrers'}>
                                <li className="text-white pb-4 md:pb-0 lg:text-xl lg:font-semibold hover:text-purple-500 transition">
                                    <h1>Carrers</h1>
                                </li>
                            </Link>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <button className="md:hidden lg:inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:text-gray-700">
                                <Link to={'/contact'}>
                                    Contact Us
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <button className="px-8 py-4 rounded-lg text-white lg:text-lg lg:font-semibold tracking-wide bg-gray-600 hover:bg-purple-500 shadow-md transition">
                        <Link to={'/contact'}>
                            Contact Us
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;