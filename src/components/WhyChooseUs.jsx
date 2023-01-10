import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col items-center justify-center p-[20px] lg:p-[40px]'>
            <h1 className='text-4xl lg:text-6xl text-center font-bold mt-16 lg:mt-4 mb-16'>Why Choose Us ?</h1>
            <p className='text-base lg:text-3xl text-center font-semibold opacity-80 tracking-wide mb-16'>
                We are a software development and consulting company that creates and transforms products and enterprises to drive growth. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className='w-full flex flex-col lg:flex-row items-center justify-between'>
                <div class="flex justify-center mb-8 lg:mb-0 w-full lg:w-[20%] h-[315px]">
                    <div class="block rounded-lg shadow-lg bg-gray-900 max-w-sm text-center hover:bg-gray-800 transition">
                        <div class="p-4 lg:p-6 h-full flex flex-col items-center justify-center">
                            <h5 class="text-indigo-600 text-2xl text-center font-semibold mb-2">QUALITY</h5>
                            <p class="text-white text-lg text-center mt-2 mb-4">
                                We adhere to the best quality management practises in use around the world. We have a team that thoroughly understands the client's needs and focuses solely on the client's satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mb-8 lg:mb-0 w-full lg:w-[20%] h-[315px]">
                    <div class="block rounded-lg shadow-lg bg-gray-900 max-w-sm text-center hover:bg-gray-800 transition">
                        <div class="p-6 h-full flex flex-col items-center justify-center">
                            <h5 class="text-indigo-600 text-2xl text-center font-semibold mb-2">CUSTOMER-FIRST STRATEGY</h5>
                            <p class="text-white text-lg text-center mt-2 mb-4">
                                We aspire to provide our clients with the best possible solutions and services in a timely manner, while maintaining confidentiality and cost-effectiveness.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mb-8 lg:mb-0 w-full lg:w-[20%] h-[315px]">
                    <div class="block rounded-lg shadow-lg bg-gray-900 max-w-sm text-center hover:bg-gray-800 transition">
                        <div class="p-6 h-full flex flex-col items-center justify-center">
                            <h5 class="text-indigo-600 text-2xl text-center font-semibold mb-2">COMPLETE COLLABORATION</h5>
                            <p class="text-white text-lg text-center mt-2 mb-4">
                                We see our clients as an extension of our company. We work to instil a desire to collaborate with us. We work with dedication and finesse in order to achieve our goals.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mb-16 lg:mb-0 w-full lg:w-[20%] h-[315px]">
                    <div class="block rounded-lg shadow-lg bg-gray-900 max-w-sm text-center hover:bg-gray-800 transition">
                        <div class="p-6 h-full flex flex-col items-center justify-center">
                            <h5 class="text-indigo-600 text-2xl text-center font-semibold mb-2">COST-EFFECTIVE</h5>
                            <p class="text-white text-lg text-center mt-2 mb-4">
                                In order to improve business performance, we are constantly looking for new and innovative ways to deliver high-quality, cost-effective active solutions and services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;