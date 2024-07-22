import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full flex flex-col justify-center items-center relative rounded-md mx-auto py-10 md:py-0 overflow-hidden'>

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className='p-4 text-center relative z-10 w-full'>

                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master The Art Of Music</h1>

                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>

                <div className='mt-4'>
                    <Link href={'/courses'} >
                        <Button
                            borderRadius="1.75rem"
                            className='bg-black'
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroSection