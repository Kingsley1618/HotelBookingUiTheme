'use client'
import React,{useEffect, useState} from 'react'
import {useCountryData} from "@/hooks/useCountry"
export default function BookVisa() {
    const [countryList, setCountryList] = useState([])
    const countries = useCountryData()
    useEffect(()=> {
        const sortedCountry = countries?.country?.map((val)=> {
        return val?.name?.common
        })
        setCountryList(sortedCountry.sort())
        
        },[countries.country])
  return (
    <>
        <form className='grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-7'>
<div className='w-[100%] '>
<label htmlFor='country' className='text-[.8rem] relative top-[13px] bg-white z-[9999] left-[10px] px-2'>Home country</label>
<div className='relative'>
<select id="country" name="country" className='appearance-none w-[100%]  p-3 outline-none border-[rgb(204,204,204)] border-[1px] rounded-md text-gray-700'>
{countryList?.map((countryName)=> {
    return <option value={countryName}>{countryName}</option>
})}

</select>

<div class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2">
<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7"></path>
    </svg>
    </div></div>
    
</div>




<div className='w-[100%] relative'>

<label htmlFor='country' className='text-[.8rem] relative top-[13px] bg-white z-[9999] left-[10px] px-2'>Home country</label>
<div className='relative'>
<select id="country" name="country" className='appearance-none w-[100%]  p-3 outline-none border-[rgb(204,204,204)] border-[1px] rounded-md text-gray-700'>
{countryList?.map((countryName, index)=> {
    return <option key = {index} value={countryName}>{countryName}</option>
})}

</select>

<div class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2">
<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7"></path>
    </svg>
    </div></div>
</div>



<div className='w-[100%] relative'>

<label htmlFor='country' className='text-[.8rem] relative top-[13px] bg-white z-[9999] left-[10px] px-2'>Home country</label>
<div className='relative'>
<select id="country" name="country" className='appearance-none w-[100%]  p-3 outline-none border-[rgb(204,204,204)] border-[1px] rounded-md text-gray-700'>
{countryList?.map((countryName)=> {
    return <option value={countryName}>{countryName}</option>
})}

</select>

<div class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2">
<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7"></path>
    </svg>
    </div></div>
</div>

</form>
    </>
  )
}
