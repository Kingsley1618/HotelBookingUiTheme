import React from 'react'
import Link from 'next/link'
import styles from "./review.module.css"
import ReviewCard from './ReviewCard'
export default function Review() {
  return (
    <div className='container md:mt-[100px] mt-[40px]'>

    <div className='flex justify-between'>
    
    <div className='md:flex-[0.7] flex-1'>
    <h1 className={styles.header}>Reviews</h1>
    
    <p className={styles.text}>What people says about Golobe facilities.</p>
    </div>
    
    <div className='flex-[0.3] md:flex hidden justify-end items-center'>
    <Link href="#" className='text-[1rem] underline font-medium tracking-[-1px]'>See all</Link>
    </div>
    
    </div>


    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-2 w-[100%] sm:max-w-[100%] mx-auto max-w-[98%]'>

<ReviewCard />

    </div>
    </div>
  )
}
