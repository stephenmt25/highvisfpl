"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Premier_League_Symbol from "../../public/Premier_League_Symbol.png"
import Page1 from './page1';

const Project = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-[100svh] overflow-hidden">
      <div className='fixed top-[-10px] left-[300px] z-[-1] translate-x-48 opacity-40 pl-symbol'>
        <Image src={Premier_League_Symbol} alt='Premier_League_Symbol'  />
      </div>
      <header className='p-5 z-1'>
        <Separator className='bg-purple-900' />
        <div data-replace="highvisfpl" className={`text-5xl flex items-center 
        
        relative ${isHovered ? 'is-animating' : ''}`}
        // animate-scroll-up (add to className for animation)
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <span className="mt-2">highvisfpl</span>
        </div>
      </header>
      <main className=''>
        <article className='relative min-h-[100svh] block'>
          <section className='relative z-0 min-h-[43.75rem]'>
            <div className=''>
              <div className='pt-[4.875rem] min-h-[25.375rem] max-h-[56.375rem]'/>
              <div className='grid grid-cols-2'>
                <h1 className='text-5xl ml-5 max-w-[530px]'>the ultimate platform for visualizing and analyzing FPL data</h1>
                <div className='justify-self-end self-end mr-[50px]'>Scroll Down  ¬ </div>
              </div>
              
            </div>
          </section>
          <section className='relative z-1 min-h-[43.75rem]'>
            <div className='rounded-2xl mt-[-8rem] bg-purple-900 bg-opacity-20'>
              <Page1 />
            </div>
          </section>
          <section className='relative z-1 min-h-[13.75rem]'>
          
          </section>
          
        </article>
      </main>
    </div>
  );
};

export default Project;