import Image from 'next/image'
import React from 'react'
import {FaTelegramPlane} from "react-icons/fa"
import Flight from "@/assets/webp/flight.webp"
import Hotel from "@/assets/webp/hotel.webp"
export default function Reservations() {
  return (
    <div className='mt-[80px] grid md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-7'>

<div className='relative w-[100%]'>
<Image src={Flight} className='w-[100%] rounded-3xl' alt='flight' loading='lazy' width={800} height={800} />
<div className='absolute bottom-0 w-[100%] text-center py-2' style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0) 17%, rgba(18, 18, 18, 0.75) 48.67%);"}}>
    <div className='w-[100%] sm:max-w-[100%] max-w-[90%] mx-auto' >
<h1 className='text-white font-[900] md:text-[1.7rem] text-[1.1rem]'>Flights</h1>
<p className='font-bold text-white text-center md:text-[1rem] text-[.7rem] md:mb-[30px] mb-[20px]'>Travel the world with cheap flights, exclusive deals, and more.</p>
<button type="button" className='bg-[rgb(135,206,235)] cursor-pointer font-medium rounded-lg py-3 px-3  flex justify-center mx-auto items-center md:gap-x-2 gap-x-1 md:w-[50%] w-[70%]'><FaTelegramPlane /> <h1>Search flights</h1></button>
</div>
</div>
</div>

<div className='relative w-[100%]'>
<Image src={Hotel} className='w-[100%] rounded-3xl' alt='flight' loading='lazy' width={800} height={800} />
<div className='absolute bottom-0 w-[100%] text-center py-2' style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0) 17%, rgba(18, 18, 18, 0.75) 48.67%);"}}>
    <div className='w-[100%] sm:max-w-[100%] max-w-[90%] mx-auto' >
<h1 className='text-white font-[900] md:text-[1.7rem] text-[1.1rem]'>Hotels</h1>
<p className='font-bold text-white text-center md:mb-[30px] mb-[20px] md:text-[1rem] text-[.7rem] '>Book hotels in over 100 countries around the world.</p>
<button type="button" className='bg-[rgb(135,206,235)] cursor-pointer font-medium rounded-lg py-3 px-3  flex justify-center mx-auto items-center md:gap-x-2 gap-x-1 md:w-[50%] w-[70%]'><FaTelegramPlane /> <h1>Search flights</h1></button>
</div>
</div>
</div>


<div className='relative w-[100%]'>
<Image src={Flight} className='w-[100%] rounded-3xl' alt='flight' loading='lazy' width={800} height={800} />
<div className='absolute bottom-0 w-[100%] text-center py-2' style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0) 17%, rgba(18, 18, 18, 0.75) 48.67%);"}}>
    <div className='w-[100%] sm:max-w-[100%] max-w-[90%] mx-auto'>
<h1 className='text-white font-[900] md:text-[1.7rem] text-[1.1rem]'>Flights</h1>
<p className='font-bold text-white text-center md:mb-[30px] mb-[20px] md:text-[1rem] text-[.7rem]'>Travel the world with cheap flights, exclusive deals, and more.</p>
<button type="button" className='bg-[rgb(135,206,235)] cursor-pointer font-medium rounded-lg py-3 px-3  flex justify-center mx-auto items-center md:gap-x-2 gap-x-1 md:w-[50%] w-[70%]'><FaTelegramPlane /> <h1>Search flights</h1></button>
</div>
</div>
</div>



<div className='relative w-[100%]'>
<Image src={Hotel} className='w-[100%] rounded-3xl' alt='flight' loading='lazy' width={800} height={800} />
<div className='absolute bottom-0 w-[100%] text-center py-2' style={{backgroundImage : "linear-gradient(rgba(0, 0, 0, 0) 17%, rgba(18, 18, 18, 0.75) 48.67%);"}}>
    <div className='w-[100%] sm:max-w-[100%] max-w-[90%] mx-auto'>
<h1 className='text-white font-[900] md:text-[1.7rem] text-[1.1rem]'>Hotels</h1>
<p className='font-bold text-white text-center md:mb-[30px] mb-[20px] md:text-[1rem] text-[.7rem]'>Book hotels in over 100 countries around the world.</p>
<button type="button" className='bg-[rgb(135,206,235)] cursor-pointer font-medium rounded-lg py-3 px-3 flex justify-center mx-auto items-center md:gap-x-2 gap-x-1 md:w-[50%] w-[70%]'><FaTelegramPlane /> <h1>Search flights</h1></button>
</div>
</div>
</div>


    </div>
  )
}
