"use client";
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const HeroSection = () => {
    return (
        <div className='pb-28 px-4'>
            <div className='container mx-auto text-center'>
                <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Smarter Money Management Starts Here</h1>
                <p className='text-xl text-grey-600 mb-8 max-w-2xl mx-auto'>Gain full visibility into your finances and unlock better budgeting with powerful automation and real-time spending insights.</p>
                <div className='flex justify-center space-x-4'>
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">Dashboard</Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size="lg" variant="outline " className="px-8">Get Started</Button>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image src="/banner.jpeg" width={1280} height={720} alt='hero image' className='rounded-lg shadow-2xl border mx-auto mt-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
