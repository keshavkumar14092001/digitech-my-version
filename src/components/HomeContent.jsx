import { useEffect } from 'react';
import '../Assets/css/HomeContent.css'

const HomeContent = () => {

    function changeText() {
        const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Websites.";
            }, 0);
            setTimeout(() => {
                text.textContent = "Applications.";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Softwares.";
            }, 8000);
        }
        textLoad();
        setInterval(textLoad, 12000);
    }

    useEffect(() => {
        changeText();
    }, []);

    return (
        <div className="container pl-[10px] lg:pl-[35px]">
            <p className='text-purple-500 text-[28px] lg:text-4xl font-semibold tracking-wide pb-[18px]'>JOIN THE REVOLUTION</p>
            <span className='pb-4 text-[30px]'>
                <span className="text first-text tracking-wide text-base md:text-3xl">We Build Creative </span>
                <span className="text sec-text tracking-wide text-base md:text-3xl">Freelancer.</span>
            </span>
            <p className='text-white text-2xl lg:text-[34px] tracking-wide font-semibold'>Best IT Service Provider at Affordable Price.</p>
        </div>
    )
}

export default HomeContent;