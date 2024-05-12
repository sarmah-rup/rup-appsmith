import React from 'react';
import Spotlight, { SpotlightCard } from './spotlight';

const SpotlightSection = () => {
  return (
    <Spotlight className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
  {/* Card #1 */}
  <SpotlightCard >
  <div id='spotlight' className="relative bg-slate-900 p-6 rounded-[inherit] z-20 overflow-hidden spotlight" style={{ background: 'white', border: '1px solid #DCDAEF', backgroundImage: 'linear-gradient(to bottom left, transparent 90%, rgba(251, 251, 248, 0.5) 85%)', marginBottom:'0px' }}>
    {/* Radial gradient */}
   
    <div className="flex flex-col items-center text-center" >
      {/* Image */}
      
      {/* Text */}
      <div className="grow mb-5 relative">
        {/* Icon with glow effect */}
        <div className="text-xl text-slate-200 font-bold mb-1" style={{ textAlign: 'left' , marginBottom:'10px'}}>
          <i className="fa-solid fa-server glow-on-hover icon-glow" style={{ background: '#6533E3', padding: '12px', borderRadius: '20px', fontSize: '15px' }}></i>
        </div>




        {/* Header */}
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>Self-hosting air-gapped deployment</h2>
        {/* Description */}
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478', marginBottom:'0px' }}>Run any edition of Appsmith in your
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>Embeddable within existing apps with shared logins </h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Extend the functionality of your legacy and SaaS applications
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>Open source under Apache 2.0 license</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Build with high transparency and low vendor risk
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>SAML and OIDC SSO</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Secure authentication and
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>Role based access control</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Customize granular roles, groups, and permissions
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>User provisioning system</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Import users and their roles from your current IdP
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>Audit logging</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Track organizational use and remediate issues
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>SOC 2 Type II</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Top notch security processes and
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
        <h2 className="font-display text-lg font-bold leading-tight md:text-xl 2xl:text-2xl mb-2xs text-primary-dark-900 dark:text-primary-neutral-100" style={{ textAlign: 'left', color: '#101727', }}>Award-winning support</h2>
        {/* Description */}
         <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs" style={{ textAlign: 'left', color: '#5E5478',marginBottom:'0px' }}>Development assistance with rapid response</p>
      </div>
    </div>
  </div>
</SpotlightCard>

</Spotlight>
  );
};

export default SpotlightSection;
