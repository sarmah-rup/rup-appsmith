//import { Link } from 'react-router-dom';
import { useRouter } from 'next/router'
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import Spotlight, { SpotlightCard } from '../app/ui/components/spotlight';
import image_banner from '/public/conversion_panel.png';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.css';


function DemoPage() {
  

  
  return (
    <>
    
    <main className="flex  flex-col p-6" style={{margin:'0px'}}>
     <div className="container mx-auto" style={{marginTop:'100px'}}>
      <div className="flex flex-col text-primary-dark-800 dark:text-primary-neutral-50 items-center mx-auto max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
      <h1 className="font-display text-3xl font-bold leading-tight xl:text-4xl text-center">
      <span>
        
        <span className="relative inline-block bg-gradient-to-br from-primary-light-500 to-primary-light-300 font-display text-4xl" style={{ backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
          Enterprise scale
          
          <div className="pointer-events-none absolute -left-[5px] top-1/2 h-full w-full -translate-y-1/2 overflow-hidden border-l-2 border-l-primary-light-500 opacity-0" style={{ opacity: 1  }}>
            <div className="h-full w-full -translate-x-full" style={{ background: 'linear-gradient(90deg, rgba(116, 65, 246, 0.2) 54.94%, rgba(116, 65, 246, 0) 96.77%)', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}></div>
          </div>
        </span>
        
        <span></span>
        <br></br>
        <span className="font-display text-4xl" style={{}}>security, and governance</span>
      </span>
    </h1>
        <div className="font-body text-xs leading-normal md:text-sm lg:text-base text-center mt-3xs text-primary-dark-800/70 dark:text-primary-neutral-50/80 lg:mt-2xs 2xl:mt-xs max-w-[35em] lg:max-w-[40em] 2xl:max-w-[45em]">
          <p className="font-body text-xl leading-normal md:text-sm lg:text-base mb-2xs">
            <span>From startups to enterprises, businesses are improving operations and increasing efficiency by building custom apps on Appsmith.</span>
          </p>
        </div>
   {/*     <div className="mt-2xs flex gap-sm md:mt-sm 2xl:mt-md">
          <a className="group relative inline-flex items-center whitespace-nowrap rounded text-primary-neutral-50 transition hover:text-primary-light-500 dark:hover:text-primary-neutral-50 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg" target="_blank">
            <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Try Cloud</span>
            <span className="absolute left-0 top-0 h-full w-full rounded border-[1px] border-primary-light-500 bg-gradient-to-br from-primary-light-500/10 to-primary-light-650/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-primary-light-500/50 dark:to-primary-light-650/50"></span>
            <span className="absolute left-0 top-0 h-full w-full rounded bg-gradient-to-br from-primary-light-500 to-primary-light-650  transition-opacity duration-300 group-hover:opacity-0"></span>
          </a>
          <a className="group relative inline-flex items-center whitespace-nowrap rounded border border-primary-light-500 text-primary-light-500 transition-colors duration-300 hover:bg-primary-light-500/10 dark:border-primary-neutral-50 dark:text-primary-neutral-50 dark:hover:bg-primary-neutral-50/20 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg" target="_blank" href="https://docs.appsmith.com/getting-started/setup">
            <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Self-host</span>
          </a>
        </div> */}
      </div>
    </div>

    </main>
  
    <div className='container mx-auto spot'>
    <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
  {/* Card #1 */}
  <SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fa-solid fa-server glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>Self-hosting air-gapped deployment</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Run any edition of Appsmith in your
infrastructure</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fa-solid fa-anchor glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>Embeddable within existing apps with shared logins </h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Extend the functionality of your legacy and SaaS applications
infrastructure</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fa-solid fa-arrows-to-dot glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>Open source under Apache 2.0 license</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Build with high transparency and low vendor risk
infrastructure</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-lock glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>SAML and OIDC SSO</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Secure authentication and
authorization with your login provider
</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-user-plus  glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>Role based access control</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Customize granular roles, groups, and permissions
</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-users-gear  glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>User provisioning system</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Import users and their roles from your current IdP
</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-code-compare glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>Audit logging</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Track organizational use and remediate issues
</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-brands fa-ubuntu glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>SOC 2 Type II</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Top notch security processes and
controls</p>
      </div>
    </div>
  </div>
</SpotlightCard>
<SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
      <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
    </div>
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fas fa-solid fa-trophy glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: 'black', }}>Award-winning support</h2>
        {/* Description */}
        <p className="text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: 'black', marginBottom:'0px' }}>Development assistance with rapid response</p>
      </div>
    </div>
  </div>
</SpotlightCard>

</Spotlight>

    </div>
  

    <div className=' ' style={{margin:'50px'}}>
    <div className="container mx-auto ">
      <div className="dark relative flex translate-y-1/4 flex-col overflow-hidden rounded-lg bg-secondary-light-100/60 opacity-0 md:flex-row ConversionPanel_noiseBgLight__3g_pP" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
        <div className="flex flex-col justify-between p-md text-primary-neutral-50 2xl:p-lg md:w-2/3">
          <div>
            <h3 className="font-display text-xl font-bold leading-extra-tight md:text-2xl xl:text-3xl 2xl:text-3_5xl mb-2xs">
              <span>
                <span>Appsmith is lightweight, fast,
and developer-focused</span>
              </span>
            </h3>
            <div className="font-body text-xs leading-normal md:text-sm lg:text-base text-primary-dark-50">
              <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
                <span>Appsmith simplifies internal tool development for businesses. This helps to streamline operations, automate processes, and quickly integrate multiple apps and data while enhancing legacy apps with new features.&nbsp;</span>
              </p>
            </div>
          </div>
          <div className="mt-md flex flex-col gap-sm sm:flex-row">
            <Link className="group relative items-center whitespace-nowrap flex justify-center text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg rounded transition-colors border bg-primary-neutral-50 text-primary-light-500 hover:bg-primary-neutral-50/20 hover:text-primary-neutral-50"  href="https://appsmith.com/">
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
        src={image_banner} alt='banner' style={{ color: 'transparent' }}>

   </Image>
     
        
      </div>
    </div>
    </div>
   </>
  )
}

  
export default DemoPage;