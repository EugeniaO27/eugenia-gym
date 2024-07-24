import About from '@/components/about/About';
import Facilities from '@/components/facilities/Facilities';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
     <main className='flow-root'>
       <section>
        <Hero />
        <About/>
        <Facilities />
       </section>
     </main>
     <Footer />
    </>
  )
}

export default page;