import React from 'react'
import WebDev from '../Assets/Img/app-development.png'
import AndroidDev from '../Assets/Img/mobile-development.png'
import ContentWriting from '../Assets/Img/content-writing.png'
import BlockChain from '../Assets/Img/blockchain.png'
import Responsive from '../Assets/Img/responsive-design.png'
import DigitalMarketing from '../Assets/Img/digital-marketing.png'
import NewsLetter from '../components/NewsLetter'

const Services = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-full flex justify-center items-center'>
                    <div className="aboutContainer w-[95%] lg:w-[80%] my-16 lg:my-32">
                        <div className='w-full bg-transparent/60 p-[15px] lg:p-[40px] text-white flex flex-col items-center justify-between'>
                            <h1 className='text-5xl lg:text-8xl font-bold pt-8 lg:pt-0 pb-8'>Our Services</h1>
                            <p className="text-base lg:text-2xl pb-14 lg:pb-0 font-semibold tracking-wide text-center">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum, in the first place we have granted to god, and by this our present charter confirmed for us and our heirs forever ahta the English Church shall be free , and shall have her rights.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <div className='w-[95%] md:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12 mb-32'>
                        <div className='grid grid-cols-12 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition-all'>
                            <div className='bg-purple-600 col-span-3 md:col-span-2 rounded-l-xl'>
                                <div className='flex w-full h-full items-center justify-center'>
                                    <img src={WebDev} className='h-[70px] w-[70px]' alt="loading" />
                                </div>
                            </div>
                            <div className='col-span-9 md:col-span-10 px-3 py-5'>
                                <h4 className="text-dark mb-3 text-2xl font-semibold">
                                    Website Development
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition-all'>
                            <div className='bg-purple-600 col-span-3 md:col-span-2 rounded-l-xl'>
                                <div className='flex w-full h-full items-center justify-center'>
                                    <img src={AndroidDev} className='h-[70px] w-[70px]' alt="loading" />
                                </div>
                            </div>
                            <div className='col-span-9 md:col-span-10 px-3 py-5'>
                                <h4 className="text-dark mb-3 text-2xl font-semibold">
                                    Android Development
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition-all'>
                            <div className='bg-purple-600 col-span-3 md:col-span-2 rounded-l-xl'>
                                <div className='flex w-full h-full items-center justify-center'>
                                    <img src={DigitalMarketing} className='h-[70px] w-[70px]' alt="loading" />
                                </div>
                            </div>
                            <div className='col-span-9 md:col-span-10 px-3 py-5'>
                                <h4 className="text-dark mb-3 text-2xl font-semibold">
                                    Digital Marketing
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition-all'>
                            <div className='bg-purple-600 col-span-3 md:col-span-2 rounded-l-xl'>
                                <div className='flex w-full h-full items-center justify-center'>
                                    <img src={BlockChain} className='h-[70px] w-[70px]' alt="loading" />
                                </div>
                            </div>
                            <div className='col-span-9 md:col-span-10 px-3 py-5'>
                                <h4 className="text-dark mb-3 text-2xl font-semibold">
                                    Blockchain And Web3.0 Services
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition-all'>
                            <div className='bg-purple-600 col-span-3 md:col-span-2 rounded-l-xl'>
                                <div className='flex w-full h-full items-center justify-center'>
                                    <img src={Responsive} className='h-[70px] w-[70px]' alt="loading" />
                                </div>
                            </div>
                            <div className='col-span-9 md:col-span-10 px-3 py-5'>
                                <h4 className="text-dark mb-3 text-2xl font-semibold">
                                    Responsive Designing
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 bg-gray-200 rounded-xl shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 transition-all'>
                            <div className='bg-purple-600 col-span-3 md:col-span-2 rounded-l-xl'>
                                <div className='flex w-full h-full items-center justify-center'>
                                    <img src={ContentWriting} className='h-[70px] w-[70px]' alt="loading" />
                                </div>
                            </div>
                            <div className='col-span-9 md:col-span-10 px-3 py-5'>
                                <h4 className="text-dark mb-3 text-2xl font-semibold">
                                    Content Writing
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 mb-16'>
                    <NewsLetter />
                </div>
            </div>
        </>
    )
}

export default Services;