import Image from 'next/image'
import "./globals.css";
import javco_logo from "../public/javco_logo.png"

export default function Home() {
  return (
<>
  <div className="bg-white text-jblue mx-auto max-w-screen-lg flex flex-col lg:flex-row justify-between my-2 shadow-lg shadow-indigo-500/40 rounded px-8 max-w-screen-lg">
    <div className='flex items-center m-4 lg:order-1'>
      <Image
        src={javco_logo}
        alt='logo'
        className="h-[37px] w-[140px] min-h-[64px] min-w-[78px] max-h-[140px] max-w-[140px]"
      />
    </div>
    <div className="flex flex-col lg:flex-row lg:order-2">
      <button
        className="p-2 px-4 my-4 cursor-pointer font-semibold"
        // onClick={scrollToSection}
      >
        Services
      </button>
      <button
        className="p-2 px-4 my-4 cursor-pointer font-semibold"
        // onClick={scrollToSection}
      >
        About Us
      </button>
      <button
        className="p-2 px-4 my-4 cursor-pointer font-semibold"
        // onClick={scrollToSection}
      >
        Contact Us
      </button>
    </div>
  </div>
</>



  
  )
}
