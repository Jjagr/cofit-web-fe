import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import makeStyles from '@mui/material/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import NavItem from '@element/NavItem/NavItem';
import Button from '@element/Button/Button';
import HeadText from '@element/HeadText/HeadText';
import { Presets } from 'types/TextStyles';

type Props = {
    bg: "transparent" | "white"
}

const Navbar = ({ bg }: Props) => {
    let isTransparent = bg === "transparent";
    const router = useRouter();

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleOpenDrawer = () => setOpenDrawer(!openDrawer)

    return (
        <div
            className={`${styles.navbar} ${isTransparent ? "bg-opacity-0 text-primary-50" : "bg-primary-50 text-primary-900"}`}>
            <Link href="/" passHref>
                <div className="flex justify-start items-center cursor-pointer">
                    <HeadText preset={Presets.Heading4} text="COFIT" color="text-transparent bg-clip-text bg-orange-red-gradient"/>
                </div>
            </Link>
            <div className={styles.navItemDesktop}>
                <NavItem href="/nest" label="FitNest" />
                <NavItem href="/move" label="FitMove" />
                <NavItem href="/eat" label="FitEat" />
                <Button
                    className="bg-secondary-orange text-primary-50"
                    color="none"
                    onClick={() => router.push('/move')}
                    rounded="rounded-24">
                    Get started
                </Button>
            </div>
            <div className={styles.navItemMobile}>
                <Button rounded="rounded-10" color="none" onClick={toggleOpenDrawer}>
                    <Image src="/assets/icon/menu.svg" alt="" width={24} height={24} />
                </Button>
                <Drawer PaperProps={{
                    sx: {
                        border: 'none'
                    }
                }} open={openDrawer} onClose={toggleOpenDrawer} anchor="right">
                    <div className="w-96 flex flex-col items-center py-8">
                        <NavItem href="/nest" label="FitNest" />
                        <NavItem href="/move" label="FitMove" />
                        <NavItem href="/eat" label="FitEat" />
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar;
