'use client'
import React from 'react'
import coursesData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}


function FeaturedSection() {

    const featuredCourses = coursesData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold text-sky-600'>Featured Courses</h2>
                    <h1 className='text-3xl font-bold mt-2'>Learn With The Best</h1>
                </div>
            </div>
            <div className='mt-10 mx-8'>=
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.id} className='flex justify-center'>
                                <BackgroundGradient
                                    className=' className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"'
                                >
                                    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <Link href={`courses/${course.slug}`}>
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='p-4 text-white text-center mt-20'>
                <Link href={'/courses'} className='border border-white px-4 py-2 rounded-md text-sm'>
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedSection