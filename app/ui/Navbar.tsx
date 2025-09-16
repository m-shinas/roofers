import Image from "next/image"
import Link from "next/link"
import { mulish } from "./fonts"

function Navbar() {
  return (
    <header className="w-full fixed drop-shadow-2xl z-50">
        <div className="flex w-full h-[100px] ">
            <div className="mx-auto flex items-center justify-between px-4 bg-white rounded-b-xl shadow">
                <Link href='/' className=''>
                    <Image src="/Roofers_Logo.PNG" alt="logo" width={150} height={150} />
                </Link>
                <nav className={`${mulish.className}`}>
                    <Link href='/' className="px-3 py-2 mx-2"> Home </Link>
                    <Link href='/about-us' className="px-3 py-2 mx-2">About Us</Link>
                    <Link href='/services' className="px-3 py-2 mx-2">Services</Link>
                    <Link href='/projects' className="px-3 py-2 mx-2">Projects</Link>
                    <Link href='/contact' className="px-3 py-2 mx-2">Contact Us</Link>
                </nav>
                
            </div>
        </div>
    </header>
  )
}

export default Navbar