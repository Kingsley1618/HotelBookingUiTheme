import Image from 'next/image'
import React from 'react'
import Appstore from "@/assets/webp/app-store.svg"
import styles from "./subscription.module.css"
import Googleplay from "@/assets/webp/google-play.svg"
import WaLink from "@/assets/webp/walink.webp"
export default function Subscription() {
  return (
    <div className={`container md:mt-[100px] mt-[40px]`}>
<div className={`${styles.bgimage} rounded-3xl lg:min-h-[300px] flex mx-auto justify-center items-center w-[100%] lg:px-[60px] py-[20px] px-[18px]`}>
<div className='flex-[1]'>
<h1 className='md:text-[2rem] text-[1.1rem] text-[202E51] font-bold'>Want travel deals?</h1>
<p className='mt-3 text-[rgb(53,79,113)]'>Be the first know when our next promo starts, or when we publish new article. Stay updated with all latest news and events.</p>
<div className='flex md:flex-row flex-col gap-y-2 gap-x-3 h-auto mt-[35px]'>
<input type="email" name='email' id='email' autoComplete='email' placeholder='Your email address' className='p-3 w-[100%] outline-0' />

<button type='button' className='font-bold bg-[rgb(6,6,42)] text-white text-center py-2 px-3 rounded-md'>Subscribe</button>
</div>
</div>


<div className={` flex-[1] md:flex hidden gap-x-5 items-center justify-end`}>
<Image src={WaLink} alt="qr" className='w-[100%] max-w-[150px] h-auto' width={300} height={300} />
<div className='flex flex-col gap-y-4'>
<Image src={Appstore} alt="qr" className='h-auto' width={150} height={100} />

<Image src={Googleplay} alt="qr" className='' width={150} height={100} />

</div>
</div>
</div>
    </div>
  )
}
