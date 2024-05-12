import React from 'react';

const HeaderSection = () => {
  return (
    <div className="container mx-auto" style={{marginTop:'100px'}}>
      <div className="flex flex-col text-primary-dark-800 dark:text-primary-neutral-50 items-center mx-auto max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <h1 className="font-display text-3xl font-bold leading-tight xl:text-6xl text-center">
          <span>
            <span className="relative inline-block bg-gradient-to-br from-primary-light-500 to-primary-light-300" style={{ backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
              Enterprise scale
              <div className="pointer-events-none absolute -left-[5px] top-1/2 h-full w-full -translate-y-1/2 overflow-hidden border-l-2 border-l-primary-light-500 opacity-0" style={{ opacity: 1 }}>
                <div className="h-full w-full -translate-x-full" style={{ background: 'linear-gradient(90deg, rgba(116, 65, 246, 0.2) 54.94%, rgba(116, 65, 246, 0) 96.77%)', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}></div>
              </div>
            </span>
            <span></span>
            <br></br>
            <span>Security, and governance</span>
          </span>
        </h1>
        <div className="font-body text-xs leading-normal md:text-sm lg:text-base text-center mt-3xs text-primary-dark-800/70 dark:text-primary-neutral-50/80 lg:mt-2xs 2xl:mt-xs max-w-[35em] lg:max-w-[40em] 2xl:max-w-[45em]">
          <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
            <span>Thousands of teams use the Appsmith low-code application platform to quickly build, deploy, and manage effective software with enterprise-grade security and governance.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
