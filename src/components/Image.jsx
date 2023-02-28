// This code imports a link component from next, and then returns an icon component that is a link. The icon component takes in 3 props: href, src, and alt. The icon component returns a link component with the href prop as the href attribute. The link component returns an anchor tag with a class of w-8 and h-8. The anchor tag returns an image tag with the src and alt props as the src and alt attributes.

// icon dom

// Path: src\components\dom\Icon.jsx

import Link from 'next/link'

export default function Icon({ href, src, alt, width, height, invert }) {
  return (
    <Link href={href}>
      <img src={src} alt={alt} width={width} height={height} style={{ filter: invert ? 'invert(1)' : 'invert(0)' }} />
    </Link>
  )
}