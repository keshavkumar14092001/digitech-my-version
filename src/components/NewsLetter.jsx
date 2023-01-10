import React from 'react'

const NewsLetter = () => {
    return (
        <section className="w-full p-[20px] lg:p-[40px]">
            <div class="pb-2 pt-8 relative mx-auto w-16 h-16 bg-indigo-600 rounded-full">
                <img class="absolute top-0 left-0" src="flaro-assets/images/applications/blur.svg" alt="" />
                <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg width="40" height="40" viewbox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00098 13.3335L18.152 22.1008C19.2716 22.8473 20.7303 22.8473 21.85 22.1008L35.001 13.3335M8.33431 31.6668H31.6676C33.5086 31.6668 35.001 30.1744 35.001 28.3335V11.6668C35.001 9.82588 33.5086 8.3335 31.6676 8.3335H8.33431C6.49336 8.3335 5.00098 9.82588 5.00098 11.6668V28.3335C5.00098 30.1744 6.49336 31.6668 8.33431 31.6668Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </div>
            <h1 className='w-100% text-center text-3xl lg:text-5xl font-bold tracking-wide pt-4 lg:pt-0 pb-8 lg:pb-16'>
                Our Daily's NewLetter
            </h1>
            <div className='w-full bg-transparent/70 p-[10px] md:p-[20px] lg:p-[30px]'>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className='w-full lg:w-[45%] flex flex-col items-center justify-between'>
                        <h1 className="mb-3 w-full text-white text-3xl md:text-5xl text-center font-bold leading-tight">
                            Join Our Newsletter
                        </h1>
                        <h3 className='text-white text-base pb-4 lg:pb-0 md:text-3xl lg:font-semibold tracking-wide'>
                            Let's build successful business together.
                        </h3>
                    </div>
                    <form className="w-full lg:w-[50%]">
                        <div className="mb-5">
                            <input className="px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="newsletterInput1-1" type="text" placeholder="First &amp; last name" />
                        </div>
                        <div className="mb-5">
                            <input className="px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="newsletterInput1-2" type="text" placeholder="Email address" />
                        </div>
                        <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Subscribe Now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;