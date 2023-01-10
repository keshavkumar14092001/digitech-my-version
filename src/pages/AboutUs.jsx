import firstBg from '../Assets/Img/about.jpg';
import secondBg from '../Assets/Img/about1.jpg';
import Services from '../components/Services';
import NewsLetter from '../components/NewsLetter';

const AboutUs = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-full flex justify-center items-center'>
                    <div className="aboutContainer w-[95%] lg:w-[80%] my-16 lg:my-32">
                        <div className='w-full bg-transparent/60 p-[15px] lg:p-[40px] text-white flex flex-col items-center justify-between'>
                            <h1 className='text-5xl lg:text-8xl font-bold pt-8 lg:pt-0 pb-8'>All About Us</h1>
                            <p className="text-base lg:text-2xl pb-14 lg:pb-0 font-semibold tracking-wide text-center">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum, in the first place we have granted to god, and by this our present charter confirmed for us and our heirs forever ahta the English Church shall be free , and shall have her rights.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full  flex flex-col justify-between items-center'>
                    <div className='w-full lg:w-[90%]'>
                        <div className='flex flex-col lg:flex-row items-center justify-evenly w-full my-12 lg:my-20'>
                            <div className='w-[90%] lg:w-[40%] border-4 rounded-md border-purple-600'>
                                <img src={firstBg} className='w-full bg-cover rounded-md' alt="loading" />
                            </div>
                            <div className='w-[90%] lg:w-[40%] flex flex-col items-start justify-between'>
                                <h1 className='text-3xl lg:text-5xl pt-8 pb-4 lg:pb-8 text-gray-600 font-bold tracking-wide'>
                                    Your digital Partner
                                </h1>
                                <p className='text-base lg:text-xl font-semibold lg:font-normal tracking-wide'>
                                    We are a group of IT professionals and entrepreneurs with a vision to make India digital. We provide end-to-end IT solutions to start-ups and established businesses. We believe in the power of technology and leverage it to solve real life problems.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col-reverse lg:flex-row items-center justify-evenly w-full my-20'>
                            <div className='w-[90%] lg:w-[40%] flex flex-col items-start justify-between'>
                                <h1 className='text-[25px] lg:text-5xl pt-8 pb-4 lg:pb-8 text-gray-600 font-bold tracking-wide'>
                                    Start your journey with us!
                                </h1>
                                <p className='text-base lg:text-xl font-semibold lg:font-normal tracking-wide'>
                                    We at DigiTech believe that start-ups should be able to focus on what they do best without having to worry about IT. We provide customized solutions for start-ups and small businesses that are tailored to their needs.
                                </p>
                            </div>
                            <div className='w-[90%] lg:w-[40%] border-4 rounded-md border-purple-600'>
                                <img src={secondBg} className='w-full bg-cover rounded-md' alt="loading" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <Services />
                </div>
                <div className='mt-8 mb-16'>
                    <NewsLetter />
                </div>
            </div>
        </>
    )
}

export default AboutUs;