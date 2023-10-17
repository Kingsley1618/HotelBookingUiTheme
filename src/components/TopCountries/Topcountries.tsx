'use client'
import React from 'react'
import styles from "./topcountries.module.css"
import Link from 'next/link'

import {useHover} from "@/hooks/useHover"
import Image from 'next/image'
export default function Topcountries() {

    const hoveredCountry = useHover()
  return (
    <section id="top-countries" className='container md:my-[100px] my-[40px]'>
        <div className='flex justify-between'>

            <div className='md:flex-[0.7] flex-1'>
<h1 className={styles.header}>Our top countries</h1>

<p className={styles.text}>Going somewhere to celebrate this season? Whether you&apos;re going home or somewhere to roam, we&apos;ve got the travel tools to get you to your destination.</p>
</div>

<div className='flex-[0.3] md:flex hidden justify-end items-center'>
<Link href="#" className='text-[1rem] underline font-medium tracking-[-1px]'>See all</Link>
</div>

</div>


<div className='flex md:flex-row flex-col gap-y-8 mt-6 md:h-auto md:gap-x-4'>
  <div className='bg-[rgb(135,206,235)] w-full rounded-3xl py-2 px-5 flex-1 md:order-1 order-2'>
    {hoveredCountry.currentCountry.map((country, index) => {
      return (
        <div key={index} className='w-full'>
          {country.open ? (
            <>
              <h1 className={styles.countryHeader}>{country.name}</h1>
              <p className='text-[.9rem] mt-5'>{country.content}</p>
              <p className='text-[.9rem] mt-5 md:flex hidden'>
                {country.open
                  ? "Don't wait any longer to embark on your journey to Canada, Australia, Norway, or the United Kingdom! Let Thrillers Travels be your guide, turning your travel aspirations into unforgettable realities."
                  : null}
              </p>
              <button
                type='button'
                className='text-black mt-3 py-3 rounded-md font-bold bg-white text-center mx-auto block w-[90%] text-[.9rem]'
              >
                {country.buttonText}
              </button>
            </>
          ) : null}
        </div>
      );
    })}
  </div>

  <div className='grid grid-cols-2 gap-x-2 gap-y-2 flex-1 h-auto md:order-2 order-1'>
    {hoveredCountry.currentCountry.map((country, index) => {
      return (
        <div key={index} className='w-full h-full relative'>
          <Image
            key={index}
            src={country.image}
            onClick={() => {
              hoveredCountry.hoverChange(index);
            }}
            onMouseEnter={() => {
              hoveredCountry.hoverChange(index);
            }}
            className='rounded-3xl h-full cursor-pointer'
            height={700}
            width={700}
            alt='countries'
          />
          {country.open && (
            <div
              className={`${styles.dim} absolute cursor-pointer rounded-3xl top-0 left-0 right-0 bottom-0 h-full w-full flex justify-center items-center`}
            >
              <h1 className='text-white font-bold text-[1.5rem] text-center'>
                {country.countryName}
              </h1>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>


    </section>
  )
}
