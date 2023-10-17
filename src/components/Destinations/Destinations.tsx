/* I COULD HAVE MAPPED, BUT I WAS TOO LAZY TO MAP HAHA...AND THE TIME FRAME I HAD IS SHORT*/
/*I KNOW CODE SPLITTING IS IMPORTANT, BUT I WAS TIRED, THATS WHY...WAS STUDYING ALL NIGHT..SORRY*/
import React from 'react'
import Canada from "@/assets/webp/canada.webp"
import Link from 'next/link'
import styles from "./destination.module.css"
import Image from 'next/image'
import Reservations from './Reservations'
export default function Destinations() {
  return (
    <section id = "destination" className='container md:mt-[100px] mt-[40px]'>

<div className='flex justify-between'>

<div className='md:flex-[0.7] flex-1'>
<h1 className={styles.header}>Popular Destinations</h1>

<p className={styles.text}>Explore our popular destinations to find the best option for your next adventure!.</p>
</div>

<div className='flex-[0.3] flex justify-end items-center md:flex hidden'>
<Link href="#" className='text-[1rem] underline font-medium tracking-[-1px]'>See all</Link>
</div>

</div>

<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[30px] gap-x-5 gap-y-8'>
<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>



<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4'style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>


<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>



<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>



<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>



<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4 '>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>



<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>



<div className='flex gap-x-5 items-center bg-white rounded-2xl p-4' style={{boxShadow:"rgba(17, 34, 17, 0.05) 0px 4px 16px"}}>
<Image src={Canada} className='' alt='canada' width={90} height={90} />

<div className='flex flex-col gap-y-4'>
   <h1 className='text-gray-500'>Toronto, Canada </h1> 

   <div className='flex items-center flex-wrap'>
    <h1>Visa</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   
   <h1>Employment</h1>
   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
   <h1>Apply</h1>

   </div>
</div>

</div>
    </div>

    <Reservations />
    </section>
  )
}
