import type { FC } from 'react'

interface BioPageProps {}

const BioPage: FC<BioPageProps> = (): JSX.Element => {
  return (
    <div className="px-4 md:px-0 flex flex-col gap-8 mb-12">
      <p>
        Born in Beckenham, Kent and raised in Tunbridge Wells. Cheryl is
        currently living in Peasmarsh East Sussex. After a 20-year break from
        the design industry, Cheryl returned to study BA Hons, Fine Art Practice
        at the Hastings University Centre, where she has developed a broad range
        of skills and specialising in digital artistic language.
      </p>
      <p>
        Cheryl has a substantial background in graphic design and is familiar
        with murals, lino printing, and illustration. Her recent works are
        primarily in digital arts using projection, video, and photography.
        Influenced by a trip to the Infinity Mirror Rooms installation by
        Japanese artist Yayoi Kusama and inspired by the natural world and its
        celestial events, the light and space movement, and all that is
        affiliated with biophilia, Cheryl cherishes her innate connection with
        nature and her desire is to use technology to articulate a new way to
        connect with organic forms.
      </p>
      <p className="mb-24">
        She captures the sublime in these elements, by creating films and
        digital images of small installations using lights and liquids such as
        oil, ink, or milk. Her work has been described as looking into unknown
        worlds.
      </p>
    </div>
  )
}

export default BioPage

// Path: app/components/about.tsx
// Created at: 14:18:27 - 16/05/2023
// Language: Typescript
// Framework: React/Next.js
