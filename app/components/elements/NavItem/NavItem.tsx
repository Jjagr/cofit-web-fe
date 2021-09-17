import styles from './NavItem.module.css';

type Props = {
    label: string,
    href: string,
    
}

const NavItem = ({label, href}: Props) => {
    return (
        <a href={href} className={styles.navitem}>
            {label}
        </a>
    )
}

export default NavItem;