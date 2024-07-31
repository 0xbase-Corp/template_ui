'use client'

import Footer from '@/containers/footer/Footer'
import Navbar from '@/containers/navbar/Navbar'
import Hero from '@/views/hero/Hero'

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
