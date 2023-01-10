import React from 'react'
import { FaGlobeAsia, FaPhoneAlt, FaLocationArrow, FaRegEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <section className="text-gray-800 w-full md:w-[80%]">
                <div className="text-gray-800 px-4 md:px-12">
                    <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
                            <div className="mb-12 lg:mb-0 text-center mx-auto">
                                <FaGlobeAsia className="w-8 h-8 text-purple-500 mb-6 mx-auto" />
                                <h6 className="font-medium">India</h6>
                            </div>
                            <div className="mb-12 lg:mb-0 text-center mx-auto">
                                <FaLocationArrow className="w-8 h-8 text-purple-500 mb-6 mx-auto" />
                                <h6 className="font-medium">Pune, Maharashtra</h6>
                            </div>
                            <div className="mb-6 md:mb-0 text-center mx-auto">
                                <FaPhoneAlt className="w-8 h-8 text-purple-500 mb-6 mx-auto" />
                                <h6 className="font-medium">+91 84596 07770</h6>
                            </div>
                            <div className="text-center mx-auto">
                                <FaRegEnvelope className="w-8 h-8 text-purple-500 mb-6 mx-auto" />
                                <h6 className="font-medium">info@digitechinfoservices.com</h6>
                            </div>
                        </div>
                        <div className="max-w-[700px] mx-auto">
                            <form>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" rows="3" placeholder="Message"></textarea>
                                </div>

                                <button type="submit" className="w-full px-6 py-2.5 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;