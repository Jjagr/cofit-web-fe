import { useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './Video.module.css'

type Props = {
    link: string,
    autoPlay?: boolean,
    style?: string,
    overlay?: boolean,
}

const Video = ({ link, autoPlay = false, style, overlay = false}: Props) => {
    const [playing, setPlaying] = useState(false)

    const togglePlaying = () => setPlaying(!playing)

    return (
        <div className={`${style} relative`}
            onMouseEnter={togglePlaying}
            onMouseLeave={togglePlaying}>
            {overlay && <div className={styles.overlay}/>}
            {autoPlay 
                ? <ReactPlayer url={link} muted playing={playing} loop width={"100%"} height={"100%"}/>
                : <ReactPlayer url={link} width={"100%"} height={"100%"}/>
            }
        </div>
    )
}

export default Video