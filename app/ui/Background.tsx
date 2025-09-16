import Image from "next/image"

const Background = ({heroCount}: {heroCount: number}) => {
  if (heroCount === 0) {
    return <Image src="/roof-hero.jpg" alt="background" width={1920} height={1080} className="h-screen w-full  p-0 object-cover z-[-1]"/>
  } else if (heroCount === 1) {
    return <Image src="/steel-hero.png" alt="background" width={1920} height={1080} className="h-screen w-full  p-0 object-cover z-[-1]"/>
  } else if (heroCount === 2) {
    return <Image src="/aluminium-hero.png" alt="background" width={1920} height={1080} className="h-screen w-full  p-0 object-cover z-[-1]"/>
  }
}

export default Background