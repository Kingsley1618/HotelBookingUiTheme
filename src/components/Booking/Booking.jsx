import React from 'react'
import styles from "./booking.module.css"
import BookingCard from "./BookingCard"
export default function Booking() {
  return (
    <section id = "booking" className='mt-[100px]'>
<h1 className={styles.text1}>With you, we can</h1>
<h1 className={`${styles.text2}  md:text-[2.5rem] text-[1.8rem]`}>REVOLUTIONIZE <span className='md:inline hidden'>TRAVEL</span></h1>
<h1 className={`${styles.text3}  md:text-[2.5rem] text-[1.1rem]`}><span className='md:hidden inline'>TRAVEL</span> EXPERIENCES</h1>


<BookingCard />
    </section>

    
  )
}
