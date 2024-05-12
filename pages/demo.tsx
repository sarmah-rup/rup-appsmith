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
    
    <main className="flex flex-col p-6">
      <HeaderSection />
    </main>
  
    <div className='container mx-auto spot'>
      <SpotlightSection/>
    </div>

    
    <FooterSection/>


   </>
  )
}

  
export default DemoPage;