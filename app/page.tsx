import Image from 'next/image'
import { IMAGES } from './imageURLs'
// import hero from 'public/images/hero_img.png'

export default function Home() {
  return (
    <div className="flex flex-col p-2 md:p-0">
      <div className="flex flex-col">
        Inspired by the natural world, the vastness of the seas, skies,
        celestial events, and biophilia theory. My work uses liquid and light as
        both a medium and a theme. Working with installation, I create digital
        images and videos to feed the human desire for escapism and exploration
        immersing the viewers in visual stimulation.
      </div>
      <div className="relative mx-auto min-h-[500px] w-full my-6 rounded-md">
        <Image
          src={IMAGES.ONE}
          alt="Image One"
          placeholder="blur"
          fill
          blurDataURL={IMAGES.ONE}
          style={{
            borderRadius: '16px',
          }}
        />
        <p className="text-xs text-gray-400 absolute -bottom-5 -left-5 px-8">
          Untitled: 2023
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        My intention is to use digital methods to connect with the natural world
        and the multiverse and look at them in new ways. Advances in technology
        have in some cases distanced us from the natural world as we are
        consumed by the screen fixed in our hands, often too busy looking down
        to see the world around us. We evolve along with technology and depend
        on it. This piece explores whether the powers of technology be harnessed
        to create art and connect us with the natural world. This is where
        technology, science, nature and art meet. Technology has taken us to
        places beyond our own planet, and my aim is to consider new ways to
        experience organic forms and the natural world.
      </div>
      <div className="flex flex-col gap-2 mb-24">
        The screen itself is liquid and light.
      </div>
    </div>
  )
}
