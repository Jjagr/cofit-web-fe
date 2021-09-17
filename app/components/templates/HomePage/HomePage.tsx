import type { NextPage } from 'next'
import { Presets, Align, Weight } from 'types/TextStyles'
import HeadText from '@element/HeadText/HeadText'
import ProfileSrc, {PostType} from '@module/ProfileSrc/ProfileSrc'
import Video from '@element/Video/Video'
import { DATA, FEATURE } from '@constant/index'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import ReactPlayer from 'react-player'

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <Video overlay link={'assets/video/cofit-intro.mp4'} autoPlay style={"h-screen w-screen"} videoStyle={styles.videoStyle}/>
      </div>
      <div className={"h-96"}/>
      <ProfileSrc
        profile={DATA[0].user}
        icon={true}
        postType={PostType.POST}
        time={DATA[0].time}
      />
    </div>
  );
};

export default Home;
