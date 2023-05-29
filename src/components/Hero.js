import React from 'react';
import WomanImg from '../img/woman_hero.png';
import HeroImg from '../img/bg_hero.svg';

const Hero = () => {
  return (
    <section className={`bg-orange-100 h-[600px] mb-16 flex flex-col lg:justify-end justify-center `}>
      <div className="container mx-auto flex h-[full] justify-around items-center">
        <div className="text-[70px] leading-[1.1] font-light mb-4 flex flex-col ">
          <div className="flex items-center">
            <div className="w-10 h-[5px] mr-4 bg-red-500"></div>
            <p className="text-[25px]">
                NEW TREND
            </p>
          </div>
          <h2>
          AUTUM SALE STYLISH <br />
          <span className="font-semibold">WOMENS</span>
          </h2>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} className='object-cover h-[500px]' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
