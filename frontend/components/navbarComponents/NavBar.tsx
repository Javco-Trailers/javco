import { MoonIcon, SunIcon, Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import javco_logo from "../../public/javco_logo.png";
import path from "path";

const pathsForNav = [{href: "/", text: "Home"}, {href:"/services", text: "Services"}, {href: "/about", text: "About Us"}]

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
  const [pathsFiltered, setPathsFiltered] = useState<pathObj[] |null>(null);
  //for the rendering of a popUp of form
  const [getQuoteClicked, setGetQuoteClicked] = useState<boolean>(false);


  const path = usePathname();

  useEffect(() => {
    let paths = pathsForNav.filter((element: pathObj) => element.href !== path);
    setPathsFiltered(paths);
  }, []);

 


  return (
    <>
      <div className="flex items-center justify-between h-[10vh] mx-auto max-w-[100vw]">
        <nav className="w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center absolute left-0">
              <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                <Image className="h-16 w-16 text-primary mx-6" src={javco_logo} alt="Javco" priority />
              </a>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6 mr-1 md:mr-5 ml-auto">
              {/* Primary Navigation (Hidden on Small Screens) */}
              {pathsFiltered && (
                  <div className="hidden md:flex md:justify-end md:gap-12">
                    {pathsFiltered.map((element: pathObj, index: number) => (
                      <a key={index} href={element.href}>{element.text}</a>
                    ))}  
                    <a key="Contact1" href="#contact" onClick={() => scrollToSection("contact")}>Contact Us</a>
                  </div>
                )}
                {/* <a href="/services">Services</a>
                <a href="/about">About Us</a>
                <a href="#">Contact Us</a>
               */}

              {/* Secondary Navigation (Hidden on Extra Small Screens) */}
              <div className="hidden xs:flex items-center gap-10 ml-auto">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>

              {/* Mobile navigation toggle */}
              <div className="md:hidden flex items-center m-4">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

   {/* Mobile navigation */}
<div
  className={`fixed z-20 w-full bg-white overflow-hidden flex flex-col lg:hidden gap-12 top-0 right-0 ${!toggleMenu ? "h-0" : "h-auto mt-4 w-2/5" }`}
>
  <div className="mt-4 px-8">
    <div className="flex flex-col items-end justify-end gap-8 font-bold tracking-wider">
      <button
        className="focus:outline-none"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className={!toggleMenu ? "h-6" : "h-6" } >
        <Bars3Icon className={!toggleMenu ? "h-6" : "hidden" } />
        <XCircleIcon className={!toggleMenu ? "hidden" : "h-6"}/>
        </div>
      </button>
      {pathsFiltered&& (pathsFiltered.map((element: pathObj, index:number) => (
                      <a className="mb-2" key={index} href={element.href}>{element.text}</a>
                    )))}  
                    <a key="Contact1" href="#contact" onClick={() => scrollToSection("contact")}>Contact Us</a>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default NavBar;
