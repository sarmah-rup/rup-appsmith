//import { Link } from 'react-router-dom';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import Spotlight, { SpotlightCard } from '../app/ui/components/spotlight';
import image_banner from '/public/conversion_panel.png';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.css';
import noiseBackground from '../public/noise.svg';
import HeaderSection from '../app/ui/components/Header';
import SpotlightSection from '../app/ui/components/SpotlightCards';
import FooterSection from '../app/ui/components/Footer';

function DemoPage() {
  

  
  return (
    <>
    
    <section className="pt-sm md:pt-md xl:pt-lg pb-xs md:pb-sm xl:pb-md scroll-mt-32 bg-primary-neutral-50 text-primary-dark-800" id="page-title">
      <div className="container mx-auto">
        <div className="flex flex-col text-primary-dark-800 dark:text-primary-neutral-50 items-center mx-auto max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h1 className="font-display text-3xl font-bold leading-tight xl:text-6xl text-center">
          <span>
            <span className="relative inline-block bg-gradient-to-br from-primary-light-500 to-primary-light-500" style={{ backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
            Accelerate custom
              <div className="pointer-events-none absolute -left-[5px] top-1/2 h-full w-full -translate-y-1/2 overflow-hidden border-l-2 border-l-primary-light-500 opacity-0" style={{ opacity: 1 }}>
                <div className="h-full w-full -translate-x-full" style={{ background: 'linear-gradient(90deg, rgba(116, 65, 246, 0.2) 54.94%, rgba(116, 65, 246, 0) 96.77%)', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}></div>
              </div>
            </span>
            <span></span>
            <br></br>
            <span>application development</span>
          </span>
        </h1>
          <div className="font-body text-xs leading-normal md:text-sm lg:text-base text-center mt-3xs text-primary-dark-800/70 dark:text-primary-neutral-50/80 lg:mt-2xs 2xl:mt-xs max-w-[35em] lg:max-w-[40em] 2xl:max-w-[45em]">
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Thousands of teams use the Appsmith low-code application platform to quickly build, deploy, and manage effective software with enterprise-grade security and governance.</span>
            </p>
          </div>
          <div className="mt-2xs flex gap-sm md:mt-sm 2xl:mt-md">
            <Link className="group relative inline-flex items-center whitespace-nowrap rounded text-primary-neutral-50 transition hover:text-primary-light-500 dark:hover:text-primary-neutral-50 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg" href="/demo">
              <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Demo</span>
              <span className="absolute left-0 top-0 h-full w-full rounded border-[1px] border-primary-light-500 bg-gradient-to-br from-primary-light-500/10 to-primary-light-650/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-light-500/50 dark:to-primary-light-650/50"></span>
              <span className="absolute left-0 top-0 h-full w-full rounded bg-gradient-to-br from-primary-light-500 to-primary-light-650  transition-opacity duration-300 group-hover:opacity-0"></span>
            </Link>
            <Link className="group relative inline-flex items-center whitespace-nowrap rounded border border-primary-light-500 text-primary-light-500 transition-colors duration-300 hover:bg-primary-light-500/10 dark:border-primary-neutral-50 dark:text-primary-neutral-50 dark:hover:bg-primary-neutral-50/20 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg"  href="/pricing">
              <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Pricing</span>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <div className="container mx-auto" >
  <div className="grid gap-sm sm:mt-md sm:grid-cols-3" >
    <div className="flex flex-col justify-between rounded-lg bg-secondary-light-100/60 px-6 py-8 dark:bg-primary-dark-700" id='spotlight'>
      <div>
        <h3 className="font-display text-5xl font-extrabold leading-none text-primary-dark-900 dark:text-primary-light-500">9 hours</h3>
        <p className="mt-2xs text-md font-medium text-primary-light-500 dark:text-primary-dark-100">Spent to develop this React Next-js application</p>
      </div>
      
      <div className="mt-md flex h-full items-end">
        </div>
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-clock glow-on-hover-light icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>
    </div>
    <div className="flex flex-col justify-between rounded-lg bg-secondary-light-100/60 px-6 py-8 dark:bg-primary-dark-700" id='spotlight'>
      <div>
        <h3 className="font-display text-5xl font-extrabold leading-none text-primary-dark-900 dark:text-primary-light-500">60%</h3>
        <p className="mt-2xs text-md font-medium text-primary-light-500 dark:text-primary-dark-100">Development time reduced by copying global css from appsmith.com</p>
      </div>
      <div className="mt-md flex h-full items-end">
       </div>
       <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-rocket glow-on-hover-light icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>
    </div>
    <div className="flex flex-col justify-between rounded-lg bg-secondary-light-100/60 px-6 py-8 dark:bg-primary-dark-700" id='spotlight'>
      <div>
        <h3 className="font-display text-5xl font-extrabold leading-none text-primary-dark-900 dark:text-primary-light-500">+2 skills</h3>
        <p className="mt-2xs text-md font-medium text-primary-light-500 dark:text-primary-dark-100">Learnt spotlight effect and background with noise svg implementation</p>
      </div>
      <div className="mt-md flex h-full items-end">
        </div>
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-brain glow-on-hover-light icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>
    </div>
  </div>
</div>

  
    

    
    <FooterSection/>


   </>
  )
}

  
export default DemoPage;