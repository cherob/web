/**
 * Dom element for my Artist Profile "Drumnicorn"
 * Displays a banner as the header
 * a text area for the bio.
 * 4 tracks with thier cover art and a play button on hover
 * a link to the artist's spotify, soundcloud, and youtube and instagram pages by their icons
 */

/**
 * Images are located in public\img\artist
 */

// Structure
// 1. Header
// 2. Bio
// 3. Tracks
// 4. Links

// imports: react, next, and components
import Banner from '@/components/dom/artist/Banner'
import Bio from '@/components/dom/artist/Bio'
import Tracks from '@/components/dom/artist/Tracks'
import Links from '@/components/dom/artist/Links'

export default function Artist({ children }) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Banner />
      <Bio />
      <Tracks />
      <Links />
    </div>
  )
}

