"use client"

import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import { FileQuestion } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import QuoteForm from "../quoteForm/QuoteForm";
import Image from "next/image";
import javco_logo from "../../public/javco_logo.png";
import Link from "next/link";


const pathsForNav = [{href: "/", text: "Home"}, {href:"/rentals", text: "Rentals"}, {href:"/sales", text: "Sales"} ,{href: "/about", text: "About Us"}]

interface pathObj {
  href: string;
  text: string;
}

interface NavBarProps{
  scrollToSection: (sectionId: string) => void;
}

//const ContactUs: React.FC<ContactUsProps>

const NavBar: React.FC<NavBarProps> = ({scrollToSection}) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [getQuoteClicked, setGetQuoteClicked] = useState<boolean>(false);

  const path = usePathname();


  // handler
  function handleBlur(){
    setToggleMenu(false);
  }

  function handleClickForQuote(){
    setGetQuoteClicked(true);
  }
 


  return (
    <>
      <div className="flex items-center justify-between h-[10vh] mx-auto max-w-[100vw]">
        <nav className="w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col justify-center items-center absolute left-0">
              <Link href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                <Image className="h-16 w-36 text-primary mt-2 mx-6 pt-4" src={javco_logo} alt="Javco" priority />
              </Link>
              <p className="text-jblue font-semibold text-xs mb-2 pb-4">Javco Trailer Sales Inc.</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6 mr-1 md:mr-5 ml-auto">
              {/* Primary Navigation (Hidden on Small Screens) */}
              
              
                  <div className="hidden lg:flex md:justify-end md:gap-12">
                    {pathsForNav.map((element: pathObj, index: number) => (
                      <div className={`flex items-center justify-center h-[4vh] p-2 ${element.href === path ? "border-l-2 border-r-2 border-jblue" : "border-l-0 border-r-0"}`} key={`b${index}`}>
                      <Link key={index} href={element.href}>{element.text}</Link>
                    </div>))}  
                    <div className={`flex items-center justify-center h-[4vh] p-2 `} >
                    <Link key="Contact1" href="#contact" onClick={() => scrollToSection("contact")}>Contact Us</Link>
                    </div>
                    <div className={`flex items-center justify-center h-[4vh] p-2 `} >
                    <Link className="flex flex-row" href="#Quote" onClick={handleClickForQuote}><FileQuestion/> Request a Quote</Link>
                    </div>
                  </div>
                
    

              

              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center m-4">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

   {/* Mobile navigation */}
   <div onBlur={handleBlur} onMouseLeave={handleBlur} className={`fixed z-20 bg-white overflow-hidden flex flex-col lg:hidden gap-12 top-0 right-0 ${!toggleMenu ? "h-0 w-full" : "h-auto flex-shrink-0 w-2/5 mt-4  border-l-4 border-b-4 border-jblue"}`}>
  <div className="mt-4 px-8">
    <div className="flex flex-col items-end justify-end gap-8 font-bold tracking-wider">
      <button
        className="focus:outline-none"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className={!toggleMenu ? "h-6" : "h-6"}>
          <Bars3Icon className={!toggleMenu ? "h-6" : "hidden"} />
          <XCircleIcon className={!toggleMenu ? "hidden" : "h-6"} />
        </div>
      </button>

      {pathsForNav.map((element: pathObj, index: number) => (
        <a className="mb-2" key={index} href={element.href}>{element.text}</a>
      ))}

      <a className="mb-2" href="#contact" onClick={() => scrollToSection("contact")}>
        Contact Us
      </a>

      <div className="flex flex-row justify-end items-center mb-2">
        <FileQuestion />
        <span className="ml-2" onClick={handleClickForQuote}>Request a Quote</span>
      </div>

    </div>
  </div>
</div>

{getQuoteClicked && (
  <QuoteForm setShowQuote={setGetQuoteClicked}/>
)}
</div>
    </>
  );
}

export default NavBar;
