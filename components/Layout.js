import styles from "../styles/layout.module.css";
import Image from 'next/image';
import Link from "next/link";
import logo from "../public/EstraLabs1-1small.png";

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
                    <Image 
                        src="https://inconspicuousbucket.s3.us-west-2.amazonaws.com/e2v2.gif" 
                        height={62}
                        width={162}
                        alt="Estrogen" 
                        className={styles.spinningEstrogen}
                    />
                </div>
            <footer className={styles.copyright}>
                <span>(c) 2023 EstraLabs</span>
            </footer>
        </div>
    )
}