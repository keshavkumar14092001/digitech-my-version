import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-full p-[20px] lg:p-[40px] bg-[#000235] text-white'>
            <h1 className='text-center text-2xl tracking-wide font-bold pt-4'>TESTIMONIALS</h1>
            <p className='text-center text-[17px] lg:text-5xl tracking-wide font-semibold py-8 lg:py-16'>
                What They Say About Our Company?
            </p>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full group'>
                <div className='w-full lg:w-[30%] bg-[#010718] group-hover:blur-sm hover:!blur-none p-8 rounded-xl cursor-pointer mb-8 lg:mb-0'>
                    <h4 className='uppercase text-2xl tracking-wide font-bold'>John Doe</h4>
                    <p className='text-[16px] leading-7 my-3 font-light opacity-90'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem tempora ab vero nemo sapiente amet distinctio commodi facilis recusandae, vitae ad eius laudantium tempore perspiciatis iusto soluta obcaecati sunt, ipsum similique. Quos explicabo quam corrupti repellat provident sequi, et numquam dignissimos pariatur doloremque aliquam ad. Illum sit libero
                    </p>
                </div>
                <div className='w-full lg:w-[30%] bg-[#010718] group-hover:blur-sm hover:!blur-none p-8 rounded-xl cursor-pointer mb-8 lg:mb-0'>
                    <h4 className='uppercase text-2xl tracking-wide font-bold'>John Doe</h4>
                    <p className='text-[16px] leading-7 my-3 font-light opacity-90'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem tempora ab vero nemo sapiente amet distinctio commodi facilis recusandae, vitae ad eius laudantium tempore perspiciatis iusto soluta obcaecati sunt, ipsum similique. Quos explicabo quam corrupti repellat provident sequi, et numquam dignissimos pariatur doloremque aliquam ad. Illum sit libero
                    </p>
                </div>
                <div className='w-full lg:w-[30%] bg-[#010718] group-hover:blur-sm hover:!blur-none p-8 rounded-xl cursor-pointer mb-16 lg:mb-0'>
                    <h4 className='uppercase text-2xl tracking-wide font-bold'>John Doe</h4>
                    <p className='text-[16px] leading-7 my-3 font-light opacity-90'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem tempora ab vero nemo sapiente amet distinctio commodi facilis recusandae, vitae ad eius laudantium tempore perspiciatis iusto soluta obcaecati sunt, ipsum similique. Quos explicabo quam corrupti repellat provident sequi, et numquam dignissimos pariatur doloremque aliquam ad. Illum sit libero
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;