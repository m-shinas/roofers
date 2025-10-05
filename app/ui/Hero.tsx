import Image from "next/image";
import Link from "next/link";
import { mulish } from "./fonts";


const Hero = () => (
  <div>
    <div className="relative w-full h-screen bg-gradient-to-b from-[#0c0333]/30 to-[#0c0333]/30 py-0 flex items-center justify-start ">
      <Image src="/roof-hero.jpg" alt="hero" width={1920} height={1080} className="absolute w-full h-full object-cover -z-1"/>
      {/* <Suspense fallback={<FontAwesomeIcon icon={faSpinner} spinPulse color="#fff" size="4x"/>}> 
      
      </Suspense> */}
      
      <div className="ml-[5%]">
        <h1 className={`no-select text-5xl md:text-6xl lg:text-7xl text-white transition duration-500 ease-in`}>Exotic Roofing Solution <br />From Europe</h1>
        <Link
          href="/contact"
          className={` ${mulish.className} inline-block text-center text-white bg-gradient-to-r from-tall-poppy-600 to-tall-poppy-700 rounded-4xl hover:rounded-lg active:rounded-lg transition-[border-radius] duration-400 ease text-[24px] py-[14px] px-[42px] mt-[20px] shadow-lg cursor-pointer`}
        >
          Get a Quote
        </Link>
      </div>
    </div>
    
  </div>
);

export default Hero;