import Image from "next/image"
import Link from "next/link"
import { mulish } from "./fonts"

function Nav() {
  return (
    <header className="w-full fixed drop-shadow-2xl z-50">
        <nav className="flex w-full h-[100px] ">
            <div className="mx-auto flex items-center justify-between px-4 bg-white rounded-b-xl shadow">
                <Link href='/' className=''>
                    <Image src="/Roofers_Logo.PNG" alt="logo" width={150} height={150} />
                </Link>
                <div className={`${mulish.className}`}>
                    <Link href='/' className="px-3 py-2 mx-2"> Home </Link>
                    <Link href='/about-us' className="px-3 py-2 mx-2">About Us</Link>
                    <Link href='/products' className="px-3 py-2 mx-2">Products</Link>
                    <Link href='/services' className="px-3 py-2 mx-2">Services</Link>
                    <Link href='/projects' className="px-3 py-2 mx-2">Projects</Link>
                    <Link href='/contact' className="px-3 py-2 mx-2">Contact Us</Link>
                </div>
                {/* <Link href='/contact' className="bg-tall-poppy-600 hover:bg-tall-poppy-700 text-white px-4 py-2 rounded-lg">Get a quote</Link> */}
            </div>
        </nav>
    </header>
  )
}

export default Nav