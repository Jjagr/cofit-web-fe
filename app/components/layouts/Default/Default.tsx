import styles from './Default.module.css';
import Navbar from '@module/Navbar/Navbar';

type Props = {
    children: React.ReactNode
}

const Default = ({children}: Props) => {
    return (
        <div className="relative h-screen">
            <Navbar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Default