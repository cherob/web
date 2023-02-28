import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Navbar from '@/components/dom/Navbar'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'


const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()

  return (

    <Layout ref={ref}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Manrope" />
      <Header />
      <Navbar />
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        {Component.canvas && <Scene style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />}
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
