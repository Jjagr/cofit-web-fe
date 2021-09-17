import { useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './Video.module.css'

type Props = {
    link: string,
    autoPlay?: boolean,
    style?: string,
    videoStyle?: string,
    overlay?: boolean,
}

const Video = ({ link, autoPlay = false, style, overlay = false, videoStyle}: Props) => {
    return (
        <div className={`${style} relative`}>
            {overlay && <div className={styles.overlay}/>}
            {autoPlay 
                ? <video src={link} muted autoPlay loop className={videoStyle}/>
                : <ReactPlayer url={link} width={"100%"} height={"100%"}/>
            }
        </div>
    )
}

export default Video