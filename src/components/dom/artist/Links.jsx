import Image from '@/components/dom/Image'

export default function Links({ children }) {
  // dynamic image size
  const size = '40em'

  return (
    <div className='flex flex-row items-center justify-center w-full h-full'>
      <Image
        href='https://open.spotify.com/artist/07WSvNqUYT3u5Hgkao5qiT?si=kp-boHjkTdKlMvOMEJlFxg'
        src='/img/artist/spotify-fill-svgrepo-com.svg'
        alt='spotify'
        width={size}
        height={size}
      />
      <Image
        href='https://soundcloud.com/drumnicorn'
        src='/img/artist/soundcloud-round-svgrepo-com.svg'
        alt='soundcloud'
        width={size}
        height={size}
      />
      <Image
        href='https://www.youtube.com/@drumnicorn'
        src='/img/artist/youtube-fill-svgrepo-com.svg'
        alt='youtube'
        width={size}
        height={size}
      />
      <Image
        href='https://www.instagram.com/drumnicorn/'
        src='/img/artist/instagram-fill-svgrepo-com.svg'
        alt='instagram'
        width={size}
        height={size}
      />
    </div>
  )
}
