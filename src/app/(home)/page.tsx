'use client'

import Hero from '@/views/hero/Hero'
import Navbar from '@/containers/navbar/Navbar'
import Footer from '@/containers/footer/Footer'


const Home = () => {
 
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}

export default Home
