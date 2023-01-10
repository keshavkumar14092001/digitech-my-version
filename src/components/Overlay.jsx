import React from 'react'

const Overlay = () => {
    return (
        <div className='w-full bg-transparent/60 p-[20px] lg:p-[40px] text-white'>
            <div className='lg:p-[80px] w-full flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex flex-col items-center justify-between lg:w-1/3'>
                    <h1 className='text-8xl font-bold'>2019</h1>
                    <p className='text-2xl font-semibold tracking-wide'>Since We Started</p>
                </div>
                <div className='flex items-center justify-center lg:w-1/3'>
                    <p className='p-4 py-8 lg:py-0 text-base lg:text-xl text-center font-semibold tracking-wide'>
                        Since the year 2019, we have worked our way up and collaborated with some of the industries big names to create a more accessible online world.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-between lg:w-1/3 md:pb-6 lg:pb-0'>
                    <h1 className='text-8xl font-bold'>45</h1>
                    <p className='text-2xl font-semibold tracking-wide'>Since We Started</p>
                </div>
            </div>
        </div>
    )
}

export default Overlay;