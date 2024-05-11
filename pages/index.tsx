import React, { useRef, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import Spotlight, { SpotlightCard } from '../app/ui/components/spotlight';
import image_banner from '/public/conversion_panel.png';
import Image from 'next/image';

function PricingPage() {
  return (
    <>
    <main className="flex  flex-col p-6" style={{margin:'0px'}}>
     <div className="container mx-auto" style={{marginTop:'100px'}}>
      <div className="flex flex-col text-primary-dark-800 dark:text-primary-neutral-50 items-center mx-auto max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
      <h1 className="font-display text-3xl font-bold leading-tight xl:text-4xl text-center">
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
   {/*     <div className="mt-2xs flex gap-sm md:mt-sm 2xl:mt-md">
          <a className="group relative inline-flex items-center whitespace-nowrap rounded text-primary-neutral-50 transition hover:text-primary-light-500 dark:hover:text-primary-neutral-50 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg" target="_blank" href="https://app.appsmith.com/user/signup">
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
    <div className="container mx-auto">
      <div className="mx-auto">
        <div className="mx-auto grid gap-sm lg:grid-cols-3 lg:gap-sm xl:gap-md">
          {/* Free Tier */}
          <div className="rounded-xl px-6 py-10 bg-secondary-light-100/60">
            <div className="h-min">
              <div className="mb-2xs flex flex-col">
                <h2 className="font-display text-lg leading-tight md:text-xl 2xl:text-2xl font-medium" id="tier-standard">Free</h2>
                <span className="mt-4xs text-sm text-primary-dark-900/70 lg:min-h-[48px]">For individual developers and small teams.</span>
              </div>
              <span className="flex w-full flex-col justify-center text-3xl font-bold lg:h-[67px]">$0</span>
            </div>
            <div className="my-2xs flex items-center justify-center self-end">
              <div className="w-full">
                <div>
                  <div className="grid gap-sm lg:grid-cols-2">
                    <a className="group relative items-center whitespace-nowrap flex justify-center rounded border border-primary-dark-900 bg-primary-dark-900 text-primary-neutral-50 transition-colors hover:bg-primary-dark-900/10 hover:text-primary-dark-900 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg max-w-none" target="_blank" href="https://app.appsmith.com/user/signup">
                      <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Start on Cloud</span>
                    </a>
                    <a className="group relative items-center whitespace-nowrap flex justify-center rounded border border-primary-dark-900 bg-primary-dark-900/0 text-primary-dark-900 transition-colors hover:bg-primary-dark-900/10 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg max-w-none" target="_blank" href="https://docs.appsmith.com/getting-started/setup#self-hosted">
                      <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Self-host</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2xs h-4"></div>
            <div className="opacity-70 [&amp;_p]:!text-sm" id="pricing-page-body">
              <ul className="mb-2xs space-y-2xs pl-sm [&amp;_li]:list-disc">
                <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
                  <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
                    <div className="h-full w-full [&amp;_div]:h-full [&amp;_div]:w-full [&amp;_.injected-svg]:h-full [&amp;_.injected-svg]:w-full flex justify-center items-center">
                      <div>
                        
                      </div>
                    </div>
                  </span>
                  <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
                    <span>✅ Unlimited users</span>
                  </p>
                </li>
                <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
                  <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
                    <div className="h-full w-full [&amp;_div]:h-full [&amp;_div]:w-full [&amp;_.injected-svg]:h-full [&amp;_.injected-svg]:w-full flex justify-center items-center">
                      <div>
                       
                      </div>
                    </div>
                  </span>
                  <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
                    <span>✅ Versioning with Git (3 repos)</span>
                  </p>
                </li>
                <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
                  <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
                    <div className="h-full w-full [&amp;_div]:h-full [&amp;_div]:w-full [&amp;_.injected-svg]:h-full [&amp;_.injected-svg]:w-full flex justify-center items-center">
                      <div>
                        
                      </div>
                    </div>
                  </span>
                  <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
                    <span>✅ Google and GitHub SSO</span>
                  </p>
                </li>
                <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
                  <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
                    <div className="h-full w-full [&amp;_div]:h-full [&amp;_div]:w-full [&amp;_.injected-svg]:h-full [&amp;_.injected-svg]:w-full flex justify-center items-center">
                      <div>
                       
                      </div>
                    </div>
                  </span>
                  <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
                    <span>✅ 3 standard roles for access control</span>
                  </p>
                </li>
                <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
                  <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
                    <div className="h-full w-full [&amp;_div]:h-full [&amp;_div]:w-full [&amp;_.injected-svg]:h-full [&amp;_.injected-svg]:w-full flex justify-center items-center">
                      <div>
                       
                      </div>
                    </div>
                  </span>
                  <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
                    <span>✅ Community support</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
           {/* business Tier */}
    <div className="rounded-xl px-6 py-10 bg-secondary-light-100/60">
      <div className="h-min">
        <div className="mb-2xs flex flex-col">
          <h2 className="font-display text-lg leading-tight md:text-xl 2xl:text-2xl font-medium" id="tier-standard">Business</h2>
          <span className="mt-4xs text-sm text-primary-dark-900/70 lg:min-h-[48px]">For teams seeking more customisation and collaboration.</span>
        </div>
        <div className="flex flex-col justify-center lg:h-[67px]">
          <div className="flex items-center">
            <span className="text-3xl font-bold leading-none text-secondary-brand-500">$40</span>
            <div className="ml-4xs flex h-full flex-col justify-end text-sm lowercase tracking-normal">
              <span className="font-medium text-secondary-brand-500">/ month</span>
            </div>
          </div>
          <div className="mt-3xs flex w-3/5 text-xs leading-tight">
            For 100 hours of usage
            <button className="ml-[5px] mt-[2px] flex align-middle" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r18:" data-state="closed">
              {/* SVG here */}
            </button>
          </div>
        </div>
      </div>
      <div className="my-2xs flex items-center justify-center self-end">
        <div className="w-full">
          <div>
            <div className="grid gap-sm">
              <a className="group relative items-center whitespace-nowrap flex justify-center border-primary-brand-500 rounded border bg-secondary-brand-500 text-primary-neutral-50 transition-colors hover:bg-secondary-brand-500/10 hover:text-secondary-brand-500 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg max-w-none" target="_blank" href="https://customer.appsmith.com">
                <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Start free trial (self-hosted)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 [&amp;_p]:!text-sm" id="pricing-page-body">
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
          <span className="font-medium"><span>Everything in Free, plus</span></span>
        </p>
        <ul className="mb-2xs space-y-2xs pl-sm [&amp;_li]:list-disc">
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
            <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Granular access controls by roles and attributes</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Workflows</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Reusable packages</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Custom branding</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Datasource environments</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Versioning with Git</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Audit logs</span>
            </p>
          </li>
          <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
          <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500">
              ✅
            </span>
            <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
              <span>Priority support</span>
            </p>
          </li>
          {/* Repeat for other list items */}
        </ul>
      </div>
    </div>
    {/* enterprise Tier */}
    <div className="rounded-xl px-6 py-10 bg-primary-neutral-50" style={{ boxShadow: "rgb(116, 65, 247) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 5px, rgba(116, 65, 247, 0.19) 0px 0px 0px 6px, rgb(255, 255, 255) 0px 0px 0px 10px, rgba(116, 65, 247, 0.063) 0px 0px 0px 11px" }}>
  <div className="h-min">
    <div className="mb-2xs flex flex-col">
      <h2 className="font-display text-lg leading-tight md:text-xl 2xl:text-2xl font-medium" id="tier-standard">Enterprise</h2>
      <span className="mt-4xs text-sm text-primary-dark-900/70 lg:min-h-[48px]">For large teams with more security, scale, and support needs.</span>
    </div>
    <div className="flex flex-col justify-center lg:h-[67px]">
      <div className="text-xs">Contact sales for pricing</div>
    </div>
  </div>
  <div className="my-2xs flex items-center justify-center self-end">
    <div className="w-full">
      <div>
        <div className="grid gap-sm">
          <a className="group relative items-center whitespace-nowrap flex justify-center rounded border border-primary-light-500 bg-primary-light-500 text-primary-neutral-50 transition-colors hover:bg-primary-light-500/10 hover:text-primary-light-500 text-xs lg:text-sm 2xl:text-sm font-display font-bold px-sm py-2xs sm:px-sm sm:py-xs xl:px-md xl:py-sm 2xl:px-lg max-w-none" target="_self" href="/enterprise?lead_source=pricing%20page">
            <span className="relative z-10 flex items-center justify-center whitespace-nowrap leading-none">Contact us</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-70 [&amp;_p]:!text-sm" id="pricing-page-body">
    <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
      <span className="font-medium"><span>Everything in Business, plus</span></span>
    </p>
    <ul className="mb-2xs space-y-2xs pl-sm [&amp;_li]:list-disc">
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ Okta, Auth0, Azure AD + any SAML, OIDC SSO</span></p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ User provisioning and group sync through SCIM</span></p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ Continuous delivery</span></p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ Git branch protection and default branch configuration</span></p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ Custom integrations</span></p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ Airgapped edition</span></p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs">
          <span>✅ Managed hosting</span>
          <span className="text-xs text-primary-light-500"><span> Managed cloud hosting on dedicated servers</span></span>
        </p>
      </li>
      <li className="-ml-xs flex list-none items-baseline [&amp;_p]:inline">
        <span className="mr-2xs inline-block h-xs w-xs flex-shrink-0 pt-[2px] text-primary-dark-500 dark:text-primary-light-500"></span>
        <p className="font-body text-xs leading-normal md:text-sm lg:text-base mb-2xs"><span>✅ Dedicated Support and SLAs</span></p>
      </li>
    </ul>
  </div>
</div>

        </div>
        
      </div>
      
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
  );
}

  
  export default PricingPage;
  