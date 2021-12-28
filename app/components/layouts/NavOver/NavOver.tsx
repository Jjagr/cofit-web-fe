import styles from './NavOver.module.css';
import Navbar from '@module/Navbar/Navbar';
import Footer from '@module/Footer/Footer';
import { useEffect, useState } from 'react';
import TopNav from '@module/TopNav/TopNav';

type Props = {
    children: React.ReactNode
}

const NavOver = ({ children }: Props) => {
    const [clearNavbar, setClearNavbar] = useState(true)
    let listener: any = null

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled: any = document.scrollingElement?.scrollTop
            if (scrolled >= window.screen.height) {
                setClearNavbar(false)
            } else {
                setClearNavbar(true)
            }
        })

        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [])

    return (
        <div className="relative h-screen container mx-auto">
            <TopNav bg={clearNavbar ? "transparent" : "white"} />
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default NavOver