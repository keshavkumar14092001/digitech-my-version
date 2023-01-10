import React from 'react'
import Tourism from '../Assets/Img/Tourism.png'
import Electric from '../Assets/Img/Electric.png'
import Health from '../Assets/Img/Health.png'
import Restaurant from '../Assets/Img/Restaurant.png'
import IT from '../Assets/Img/IT.png'
import Broker from '../Assets/Img/Broker.png'
import Housing from '../Assets/Img/Housing.png'
import Ecommerce from '../Assets/Img/Ecommerce.png'
import Sports from '../Assets/Img/Sports.png'

import '../Assets/css/Animation.css'

const IndustryWeServe = () => {
    return (
        <div className='w-full p-[20px] lg:p-[40px] flex flex-col justify-center items-center'>
            <h1 className='text-center text-4xl lg:text-[60px] text-orange-500 tracking-wide font-semibold pt-8 lg:pt-0'>
                Industry We Serve
            </h1>
            <p className='lg:visible text-lg lg:text-2xl text-center pt-4 pb-16 tracking-wide'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className='w-full flex flex-col lg:flex-row justify-evenly items-center'>
                <div className='h-[650px] w-[350px] flex flex-col items-center justify-evenly rounded-2xl bg-[linear-gradient(#a19e96,#f8b500)] box-shadow animation-effect transition-all mb-8 lg:mb-0'>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Tourism} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Tourism</p>
                    </div>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Electric} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Electric</p>
                    </div>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Health} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Health</p>
                    </div>
                </div>
                <div className='h-[650px] w-[350px] flex flex-col items-center justify-evenly rounded-2xl bg-[linear-gradient(#a19e96,#f8b500)] box-shadow animation-effect transition-all mb-8 lg:mb-0'>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Restaurant} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Restaurant</p>
                    </div>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={IT} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>IT</p>
                    </div>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Broker} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Broker</p>
                    </div>
                </div>
                <div className='h-[650px] w-[350px] flex flex-col items-center justify-evenly rounded-2xl bg-[linear-gradient(#a19e96,#f8b500)] box-shadow animation-effect transition-all mb-16 lg:mb-0'>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Housing} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Housing</p>
                    </div>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Ecommerce} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Ecommerce</p>
                    </div>
                    <div>
                        <div className='w-fit h-fit'>
                            <img src={Sports} className='object-cover h-[130px] w-[135px]' alt='loading' />
                        </div>
                        <p className='text-white text-2xl font-semibold tracking-wide text-center'>Sports</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustryWeServe;