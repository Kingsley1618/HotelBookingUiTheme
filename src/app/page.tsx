import Header from '@/components/Header/Header'
import Info from '@/components/Info/Info'
import Image from 'next/image'
import Booking from "@/components/Booking/Booking"
import Topcountries from '@/components/TopCountries/Topcountries'
import Destinations from '@/components/Destinations/Destinations'
import Review from '@/components/Reviews/Review'
import Subscription from '@/components/Subscriptions/Subscription'
export default function Home() {
  return (
    <>
    <Info />
    <Header />
<Booking />
    <Topcountries />

    <Destinations />

    <Review />
    

    <Subscription />
    </>
  )
}
