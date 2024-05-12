import { useRouter } from 'next/router';
import React from 'react';
import noiseBackground from '../../../public/noise.svg';
import Link from 'next/link';
import Image from 'next/image';
import image_banner from '../../../public/conversion_panel.png';

const FooterSection = () => {
  return (
    <section className="pt-sm md:pt-sm xl:pt-md pb-sm md:pb-md xl:pb-lg scroll-mt-32 bg-primary-neutral-50 text-primary-dark-800" id="homepage-build-vs-buy-section">
    <div className="container mx-auto">
      <div className="dark relative flex translate-y-1/4 flex-col overflow-hidden rounded-lg bg-secondary-light-100/60 opacity-0 md:flex-row ConversionPanel_noiseBgLight__3g_pP" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', backgroundImage: `url(${noiseBackground})` }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0" style={{ zIndex: '1' }}>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="5%" stopColor="rgba(101, 51, 195, 0.2)" />
        <stop offset="50%" stopColor="rgba(101, 51, 195, .20)" />
      </linearGradient>
    </defs>
    <filter id="noiseFilter">
      <feTurbulence type="turbulence" baseFrequency="10" numOctaves="1" stitchTiles="nostitch" />
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="url(#gradient)" />
  </svg>
  
        <div className="flex flex-col justify-between p-md text-primary-neutral-50 2xl:p-lg md:w-2/3" style={{zIndex:'5'}}>
          <div>
            <h3 className="font-display text-xl font-bold leading-extra-tight md:text-2xl xl:text-3xl 2xl:text-3_5xl mb-2xs"><span><span>Appsmith is lightweight, fast, and developer-focused</span></span></h3>
            <div className="font-body text-xs leading-normal md:text-sm lg:text-base text-primary-dark-50">
              <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>Appsmith simplifies internal tool development for businesses. This helps to streamline operations, automate processes, and quickly integrate multiple apps and data while enhancing legacy apps with new features.&nbsp;</span></p>
            </div>
          </div>
          <div className="mt-md flex flex-col gap-sm sm:flex-row">
            <Link className="group relative items-center whitespace-nowrap flex justify-center text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg rounded transition-colors border bg-primary-neutral-50 text-primary-light-500 hover:bg-primary-neutral-50/20 hover:text-primary-neutral-50" href="https://appsmith.com/">
              <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Get started for free</span>
            </Link>
            <Link className="group relative items-center whitespace-nowrap flex justify-center text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg rounded transition-colors border border-primary-neutral-50 text-primary-neutral-50 hover:bg-primary-neutral-50/20" href="/demo">
              <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Get a demo</span>
            </Link>
            <Link className="" href="/pricing" style={{marginTop:'25px'}}>
              <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">See pricing and plans</span>
            </Link>
          </div>
        </div>
        <Image className="-mb-sm -mr-sm ml-auto mt-auto hidden max-h-96 object-contain object-right-bottom md:block md:w-1/3 md:pt-md"
          src={image_banner} alt='banner' style={{ color: 'transparent' }} />
      </div>
    </div>
  </section>
  );
};

export default FooterSection;
