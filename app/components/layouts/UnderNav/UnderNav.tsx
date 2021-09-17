import styles from './UnderNav.module.css';
import Navbar from '@module/Navbar/Navbar';

type Props = {
    children: React.ReactNode
}

const UnderNav = ({children}: Props) => {
    return (
        <div className="relative h-screen">
            <Navbar bg="white" />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default UnderNav