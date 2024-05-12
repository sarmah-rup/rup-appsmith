import React, { useRef, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import Spotlight, { SpotlightCard } from '../app/ui/components/spotlight';
import image_banner from '/public/conversion_panel.png';
import noiseBackground from '../public/noise.svg';
import HeaderSection from '../app/ui/components/Header';
import FooterSection from '../app/ui/components/Footer';
import PricingSection from '../app/ui/components/PricingCards';

import Image from 'next/image';

function PricingPage() {
  return (
    <>
    <main className="flex flex-col p-6">
      <HeaderSection />
    </main>
    

    <PricingSection/>
    <FooterSection/>
   </>
  );
}

  
  export default PricingPage;
  