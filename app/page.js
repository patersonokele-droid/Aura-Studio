"use client"

import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

// import { HeroSection } from './components/HeroSection'

function page() {
  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#172231]">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  )
}

export default page