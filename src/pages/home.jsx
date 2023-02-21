// import dynamic from 'next/dynamic'
import Artist from '@/components/dom/Artist';

export default function Page(props) {
  return (
    <Artist></Artist>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
