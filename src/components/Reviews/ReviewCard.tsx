import React from 'react'
import { data } from './ReviewData'
import {Rate} from "antd"
export default function ReviewCard() {
  return <>{data.map((card, index)=> {

return <div key={index}  className='bg-white rounded-3xl px-6 py-7 mt-6' style={{boxShadow:"rgba(17, 34, 17, 0.1) 2px 4px 16px"}}>

<h1 className='font-black text-[1.2rem] ps-2'>{card.title}</h1>
<p className='text-[.95rem] my-3 text-gray-500'>{card.content}</p>

<Rate defaultValue={4.5}/>
<p className='text-[.7rem] font-medium text-gray-500'>{card.person}</p>
<p className='text-[.7rem] font-medium text-gray-500'>Employment visa - {card.visa}</p>

</div>

 }
 )}
 </>
}
