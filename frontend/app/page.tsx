"use client"

import Image from 'next/image'
import "./globals.css";
import javco_logo from "../public/javco_logo.png"
import NavBar from '@/components/navbarComponents/NavBar';

export default function Home() {
  return (
<>
  <div className="bg-white text-jblue mb-2 shadow-lg shadow-indigo-500/40 rounded-b px-8">
   <NavBar/>
  </div>
</>



  
  )
}
