import React from 'react'
import WebDev from '../Assets/Img/app-development.png'
import AndroidDev from '../Assets/Img/mobile-development.png'
import ContentWriting from '../Assets/Img/content-writing.png'
import BlockChain from '../Assets/Img/blockchain.png'
import Responsive from '../Assets/Img/responsive-design.png'
import DigitalMarketing from '../Assets/Img/digital-marketing.png'

const Services = () => {
    return (
        <section className="bg-gray-100 pt-20 pb-12 lg:p-[40px]">
            <div className="flex flex-col justify-between items-center">
                <div className="w-full flex justify-center items-center text-center">
                    <h1 className="text-primary pt-[10px] mb-2 block text-5xl font-bold underline decoration-orange-500 underline-offset-8">
                        Our Services
                    </h1>
                </div>
                <div className='pt-16'>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:cursor-pointer hover:shadow-xl md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <img src={WebDev} alt="loading" />
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-semibold">
                                    Website Development
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4">
                            <div
                                className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:cursor-pointer hover:shadow-xl md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <img src={AndroidDev} alt="loading" />
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-semibold">
                                    Android Development
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:cursor-pointer hover:shadow-xl md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <img src={DigitalMarketing} alt="loading" />
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-semibold">Digital Marketing</h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:cursor-pointer hover:shadow-xl md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <img src={BlockChain} alt="loading" />
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-semibold">Blockchain And Web3.0 Services.</h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:cursor-pointer hover:shadow-xl md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <img src={ContentWriting} alt="loading" />
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-semibold">
                                    Content Writing
                                </h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4">
                            <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:cursor-pointer hover:shadow-xl md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <img src={Responsive} alt="loading" />
                                </div>
                                <h4 className="text-dark mb-3 text-xl font-semibold">Responsive Designing</h4>
                                <p className="text-body-color">
                                    We dejoy working with discerning clients, people for whom qualuty,
                                    service, integrity & aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services;