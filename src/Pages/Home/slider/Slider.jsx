import { useState } from "react";
import { Link } from "react-router-dom";

export const CarouselMain = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        { img: "https://i.ibb.co/K7Nr3jL/4171.jpg", tags: "Forhad", },
        { img: "https://i.ibb.co/SfBTpFM/135209692-1008057213022703-6076395981027978805-n.jpg", tags: "hadikul", },
        { img: "https://i.ibb.co/cFSFTvF/360123649-111631011996319-4056916690233710646-n.jpg", tags: "Saiful", },
        { img: "https://i.ibb.co/82WZMd5/397988885-1766746897106948-2454269159546811894-n.jpg", tags: "Naim", },
        { img: "https://i.ibb.co/cbfdCyP/268264990-1151654168701972-6230433875890358864-n.jpg", tags: "Mehedi", },
        { img: "https://i.ibb.co/SXfWpyj/349313386-275188334968147-8656130508178958030-n.jpg", tags: "Hamid", },
        { img: "https://i.ibb.co/V3zvS3F/299529788-1463053970876959-7763467763872347219-n.jpg", tags: "khairul", },
        { img: "https://i.ibb.co/Bs4Kjfg/167761995-781624789423347-8110843186034904106-n.jpg", tags: "shahriar", },
        { img: "https://i.ibb.co/304f13k/Whats-App-Image-2024-01-23-at-10-37-11-0ea28ae2.jpg", tags: "jasim", },
        { img: "https://i.ibb.co/tZYtF4K/332706432-747384516679367-3231799246770486711-n.jpg", tags: "faruk", },
        { img: "https://i.ibb.co/B43hLHC/378059467-1723716041426435-9149067049138424466-n.jpg", tags: "sadek", },
        { img: "https://i.ibb.co/T44dPHK/325405444-878127430051288-3221504988247322599-n.jpg", tags: "ashraful", },
        { img: "https://i.ibb.co/gVJXSmj/279893750-432191928617493-4043359348520444685-n.jpg", tags: "najim", },
    ];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    return (
        <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
            {/* arrow */}
            <button onClick={nextSlider} className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8 bgWhite ">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            {/* slider container */}
            <div className="ease-linear duration-300 flex gap-[2%]" style={{ transform: `translateX(-${currentSlider * 52}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? 'h-[310px] md:h-[310px] lg:h-[580px] ' : 'h-[260px] md:h-[280px] lg:h-[480px]'} min-w-[50%] bg-black/30 relative duration-200`}
                    >
                        <img src={slide.img} className="w-full h-full" alt={slide.tags} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Carousel2 = () => {
    return (
        <div className="max-w-7xl mx-auto h-[540px] lg:h-[670px] px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
            <div className="bg-[#f3f9fc] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
            <div className="w-2/3 lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
                <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold">Quality Spotlight</h1>
                <p className="text-[#616161] text-md md:text-lg">
                    Let the spotlight guide you through a visual journey of uncompromising quality in every thread and seam. Welcome to a world where quality is not just a standard; it's a spotlight on craftsmanship.
                </p>
                <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#2f9fb8]
              before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500  after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">
                    <Link to='/photo_gallery'>Explore More</Link>
                </button>
            </div>
            <CarouselMain />
        </div>
    );
};