import React from 'react'
import Logo from '../Assets/Img/Logo.png'
import { FaHandshake, FaRegThumbsUp } from 'react-icons/fa'
import { TbHeartHandshake } from 'react-icons/tb'
import WebDev from '../Assets/Img/app-development.png'
import AndroidDev from '../Assets/Img/mobile-development.png'
import ContentWriting from '../Assets/Img/content-writing.png'
import BlockChain from '../Assets/Img/blockchain.png'
import Responsive from '../Assets/Img/responsive-design.png'
import DigitalMarketing from '../Assets/Img/digital-marketing.png'
import NewsLetter from '../components/NewsLetter'

const Carrers = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center'>
                <div className="aboutContainer w-[95%] lg:w-[80%] my-16 lg:my-32">
                    <div className='w-full bg-transparent/60 p-[15px] lg:p-[40px] text-white flex flex-col items-center justify-between'>
                        <h1 className='text-4xl lg:text-7xl font-bold pt-8 lg:pt-0 pb-8'>
                            Invent. Build. Collaborate
                        </h1>
                        <p className="text-base lg:text-2xl pb-14 lg:pb-0 font-semibold tracking-wide text-center">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum, in the first place we have granted to god, and by this our present charter confirmed for us and our heirs forever ahta the English Church shall be free , and shall have her rights.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className="aboutContainer1 w-[95%] lg:w-[90%] my-16 lg:my-20">
                    <div className='w-full bg-transparent/60 p-[15px] lg:p-[40px] text-white flex flex-col items-center justify-between'>
                        <div>
                            <img src={Logo} alt="loading" />
                        </div>
                        <h1 className='text-[20px] lg:text-4xl text-center font-bold pt-8 lg:pt-0 pb-8'>
                            Digitech Celebrates a Diversity Driven Technology Environment
                        </h1>
                        <hr className='w-[84%] text-white pb-12' />
                        <p className="text-base lg:text-xl pb-14 lg:pb-0 font-semibold tracking-wide text-center">
                            What makes our employees distinctively unique is what enables us to deliver the best solutions to our customers. We are committed to being an inclusive and diverse organization where employees are valued, respected, and engaged so that we can drive the best innovative technology solutions to our customers business.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center mb-20'>
                <div className='w-[90%] flex flex-col justify-between items-center'>
                    <h1 className='text-center text-3xl md:text-6xl font-bold underline decoration-orange-500 underline-offset-8 pb-12'>
                        Why Join Us?
                    </h1>
                    <p className='text-base font-semibold text-center tracking-wide pb-12'>
                        Smartek21 creates lasting relationships that connects with the people that drive the success of our company as we focus on upholding culture and care within our community.
                    </p>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='w-full md:w-[30%] bg-gray-200 flex flex-col justify-between items-center p-4 rounded-md shadow-lg hover:shadow-xl hover:bg-gray-100 hover:cursor-pointer transition'>
                            <button
                                className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                                <FaHandshake size={45} />
                            </button>
                            <h1 className='text-3xl text-center font-bold py-4 tracking-wide'>
                                Leaders in Innovation
                            </h1>
                            <p className='font-semibold tracking-wide text-center'>
                                Being an industry leader also means investing in our employees. Let us help you cultivate your skills and push boundaries together.
                            </p>
                        </div>
                        <div className='w-full md:w-[30%] bg-gray-200 flex flex-col justify-between items-center p-4 my-12 md:my-0 rounded-md shadow-lg hover:shadow-xl hover:bg-gray-100 hover:cursor-pointer transition'>
                            <button
                                className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                                <TbHeartHandshake size={45} />
                            </button>
                            <h1 className='text-3xl text-center font-bold py-4 tracking-wide'>
                                A culture that embraces
                            </h1>
                            <p className='font-semibold tracking-wide text-center'>
                                We take pride in being a multicultural, international company that encourages freedom of self, creed and culture!
                            </p>
                        </div>
                        <div className='w-full md:w-[30%] bg-gray-200 flex flex-col justify-between items-center p-4 rounded-md shadow-lg hover:shadow-xl hover:bg-gray-100 hover:cursor-pointer transition'>
                            <button
                                className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                                <FaRegThumbsUp size={45} />
                            </button>
                            <h1 className='text-3xl text-center font-bold py-4 tracking-wide'>
                                Investing in you
                            </h1>
                            <p className='font-semibold tracking-wide text-center'>
                                Success is a balance between trust and endurance. We are confident in our teams and in turn we work hard for them. We invest in the things you care about.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-gray-100 pt-20 pb-12 lg:p-[40px]">
                    <div className="flex flex-col justify-between items-center">
                        <div className="w-full flex justify-center items-center text-center">
                            <h1 className="text-primary pt-[10px] mb-2 block text-5xl font-bold underline decoration-orange-500 underline-offset-8">
                                Who we hire?
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
                                            Web Developers
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
                                            Android Developers
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
                                        <h4 className="text-dark mb-3 text-xl font-semibold">Marketing People's</h4>
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
                                        <h4 className="text-dark mb-3 text-xl font-semibold">Blockchain Developers</h4>
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
                                            Content Writers
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
                                        <h4 className="text-dark mb-3 text-xl font-semibold">Responsive Designers</h4>
                                        <p className="text-body-color">
                                            We dejoy working with discerning clients, people for whom qualuty,
                                            service, integrity & aesthetics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <NewsLetter />
            </div>
        </div>
    )
}

export default Carrers;