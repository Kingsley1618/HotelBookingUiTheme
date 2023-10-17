
'use client'
import React,{useRef, useState} from 'react'
import {FaPaperPlane} from "react-icons/fa"
import {FaBed} from "react-icons/fa"
import BookVisa from "./Visa/BookVisa"
import BookRental from "./Rental/Rental"
import BookFlight from "./Flight/BookFlight"
import styles from "./booking.module.css"
import {FaCcVisa} from "react-icons/fa"
export default function BookingCard() {
    const [section, setSection] = useState({firstSection : true, secondSection : false, thirdSection: false})
    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()
    function activeHandler(id) {
        if(id === 1){
            refOne.current.scrollIntoView({behavior : "smooth"})
            setSection({...section, firstSection : true,secondSection: false,thirdSection: false,})
        }

        if(id === 2){
          refTwo.current.scrollIntoView({behavior : "smooth"})
          setSection({...section, secondSection : true, firstSection:false, thirdSection: false})
        }

        if(id === 3){
            refThree.current.scrollIntoView({behavior : "smooth"})
            setSection({...section, secondSection : false, firstSection:false, thirdSection:true})
        }
        
    }
  return (
    <div className='container'>
    <div className='bg-white p-[15px] rounded-3xl mt-[60px]' style={{boxShadow:"rgba(17, 34, 17, 0.1) 2px 4px 16px"}}>
<div className={`flex snap-x  ${styles.cardHeader}`}>
<div ref={refOne} onClick={()=> activeHandler(1)}   className={`flex select-none snap-center gap-x-2 items-center cursor-pointer border-r-[0.5px] border-r-[rgb(204,204,204)] py-[10px] md:px-[50px] px-[10px] ${section.firstSection ? "border-b-[2px] border-b-blue-400" : ""}`}> <FaCcVisa />  <h1 className='font-semibold' >Visa</h1></div>
<div ref={refTwo} onClick={()=> activeHandler(2)}  className={`flex select-none snap-center gap-x-2 md:flex-none flex-1 items-center cursor-pointer  md:px-[50px] px-[10px] py-[10px] ${section.secondSection ? "border-b-[2px] border-b-blue-400" : ""}`}> <FaPaperPlane />  <h1 className='font-semibold'>Flight</h1></div>
<div ref={refThree} onClick={()=> activeHandler(3)} className={`flex select-none snap-center gap-x-2 items-center cursor-pointer  md:px-[50px] px-[10px] py-[10px] border-l-[0.5px] border-l-[rgb(204,204,204)] ${section.thirdSection ? "border-b-[2px] border-b-blue-400" : ""}`}> <FaBed />  <h1 className='font-semibold'>Rent Stay</h1></div>

</div>

{section.firstSection?
<BookVisa /> : null }

{section.secondSection ? 
<BookFlight />
: null}

{section.thirdSection ? 
<BookRental />
: null}

<div className='w-[100%]'>
<button type="button" className='w-[100%] md:max-w-[300px] py-4  font-bold text-center text-[rgb(247,247,248)] rounded-lg block ms-auto mt-8 bg-[rgb(6,6,42)] text-[.8rem]'>Get Started</button>

</div>

    </div>
    </div>
  )
}