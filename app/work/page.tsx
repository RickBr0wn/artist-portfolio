import Image from 'next/image'
import { IMAGES } from '../imageURLs'

const Gallery = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-10 p-2 md:p-0">
      <Image
        src={IMAGES.ONE}
        alt="Image One"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.TWO}
        alt="Image Two"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.THREE}
        alt="Image Three"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.FOUR}
        alt="Image Four"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.FIVE}
        alt="Image Five"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.SIX}
        alt="Image Six"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.SEVEN}
        alt="Image Seven"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.EIGHT}
        alt="Image Eight"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.NINE}
        alt="Image Nine"
        placeholder="blur"
        className="rounded-md"
      />
      <Image
        src={IMAGES.TEN}
        alt="Image Ten"
        placeholder="blur"
        className="rounded-md"
      />
    </div>
  )
}

export default Gallery

// Path: app/components/gallery.tsx
// Created at: 14:18:42 - 16/05/2023
// Language: Typescript
// Framework: React/Next.js
