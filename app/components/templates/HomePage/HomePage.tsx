import type { NextPage } from 'next'
import Card from '@element/Card/Card'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Video from '@element/Video/Video'
import ReactPlayer from 'react-player'

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <Video overlay link={'assets/video/cofit-intro.mp4'} autoPlay style="w-screen overflow-hidden -mt-16" />
      </div>
      <div className={"h-96"}/>
    </div>
  )
}

export default Home
