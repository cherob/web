import React from 'react';


// imports: react, next, and components
import Banner from '@/components/dom/content/music/Banner'
import Bio from '@/components/dom/content/music/Bio'
import Tracks from '@/components/dom/content/music/Tracks'
import Links from '@/components/dom/content/music/Links'

// imports: styles
import styles from './Music.module.scss'

export default function Music() {
  return (
    <div className={styles.container}>
      <Tracks />
      <Links />
    </div>
  )
}