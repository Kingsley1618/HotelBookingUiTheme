import { useState, useEffect } from 'react';
import React from 'react'
import Toronto from "@/assets/jpg/toronto.jpg"
import Newzealand from "@/assets/jpg/newzealand.jpg"
import London from "@/assets/jpg/London.jpg"
import Norway from "@/assets/jpg/Norway.jpg"
export function useHover() {
const [currentCountry, setCurrentCountry] = useState([{
    countryName : "Canada",
    id:0,
name : "Get Canada Work visa",
content : "Imagine yourself exploring the stunning landscapes of Canada, from the vibrant cityscapes of Toronto to the breathtaking Rocky Mountains. Thrillers Travels is your gateway to Canada, offering seamless visa application services for those seeking to study, work, or settle in this land of endless possibilities.",
open : true,
buttonText : "Apply to Canada",
image : Newzealand
}, {
    countryName :<span className='text-center'>New <br /> Zealand</span>,
    id:1,
    name : "Get New Zealand Work visa",
    content : "From the majestic beauty of the Southern Alps to the serene beaches, New Zealand calls out to adventurers and nature lovers. Thrillers Travels transforms your dreams into reality with visa application support, ensuring you can experience the thrill of this captivating land.",
    open : false,
    buttonText : "Apply to New zealand",
    image : Newzealand
},{
    countryName:<span className=''>United <br /> Kingdom</span>,
    id:2,
    name : "Get United Kingdom Work visa",
    content : "Experience the blend of tradition and modernity in the United Kingdom. Whether you're drawn to London's bustling streets or the historic charm of Edinburgh, Thrillers Travels is your partner in visa application excellence. Let us simplify your path to the UK, so you can make your mark in this iconic destination.",
    open : false,
    buttonText : "Apply to United Kingdom",
    image : London
},{
    countryName : <span className=''>Norway</span>,
    id:3,
    name : "Get Norway Work visa",
    content : "Immerse yourself in the allure of Norway, where stunning fjords, Northern Lights, and rich cultural heritage await. With Thrillers Travels by your side, the journey to Norway becomes a smooth one. Our visa expertise paves the way for you to experience the magic of this Nordic wonderland.",
    open : false,
    buttonText : "Apply to Norway",
    image : London
}])
function hoverChange(id) {
   const updatedCountry =  currentCountry.map((items)=> ({
    ...items, open : items.id === id? true : false
   }))
  
   setCurrentCountry(updatedCountry)

}

return {
    hoverChange : hoverChange,
    currentCountry : currentCountry
}
}
