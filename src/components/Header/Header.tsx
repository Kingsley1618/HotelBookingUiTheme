import React from 'react'

import {FaBars} from "react-icons/fa"

import {MdBedroomParent} from "react-icons/md"
import {TbCurrencyNaira} from "react-icons/tb"
import Logo from "@/assets/jpg/logo.png"
import ThrillerIcon from "@/assets/svg/ThrillerIcon.svg"
import {TbWorld} from "react-icons/tb"
import Image from 'next/image'
export default function Header() {
  return (
   <>
   <nav className='flex justify-between container mt-3  gap-x-3'>
<Image src={Logo} className='lg:hidden flex' width={100} height={40} alt='logo' />
<div className='lg:flex hidden gap-x-8 flex-wrap'>
<div className='flex gap-x-1 items-center'> <FaBars />  <h1 className='font-semibold'>Visa Apply</h1></div>
<div className='flex gap-x-1 items-center'> <FaBars />  <h1 className='font-semibold'>Find Flight</h1></div>
<div className='flex gap-x-1 items-center'> <MdBedroomParent />  <h1 className='font-semibold'>Rent Stay</h1></div>

</div>


<div className='lg:flex hidden'>
    <Image src={ThrillerIcon} loading='lazy' className='' alt="thrillericon" width={45} height={45} />
</div>


<div className='lg:flex gap-x-8 items-center hidden flex-wrap'>
    <div>
   <div className='flex gap-x-1 items-center'><TbWorld /> <h1 className='text-[.8rem]'>EN</h1> <h1 className='font-medium'>|</h1> <TbCurrencyNaira className=""/></div>
   </div>
   <div className='flex gap-x-3 flex-wrap'>
<button type='button' className='border-[rgb(6,6,42)] border-[0.9px] font-bold text-[.9rem] py-3 px-5 rounded-lg'>Sign in</button>
<button type='button' className='bg-[rgb(6,6,42)] py-3 px-5 rounded-lg text-white font-bold text-[.8rem]'>Sign up</button>
</div>
</div>

<FaBars className="font-bold text-[1.3rem] lg:hidden flex"/>
   </nav>
   
   </>
  )
}
