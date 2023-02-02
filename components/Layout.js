import logo from "../public/EstraLabs1-1small.png";
import styles from "../styles/layout.module.css";
import Estrogen from "./Estrogen";
import Image from 'next/image';
import Link from "next/link";


export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <header className={styles.title}>
                <div className={styles.menubar}>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="EstraLabs logo"
                            width={200}
                            height={150}
                        />
                    </Link>
                </div>
            </header>
                <div className={styles.content}>
                    {children}
                    <Estrogen />
                </div>
            <footer className={styles.copyright}>
                <span>(c) 2023 EstraLabs</span>
            </footer>
        </div>
    )
}