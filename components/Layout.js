import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <header className={styles.title}>
                <h1>EstraLabs</h1>
            </header>
                <div className={styles.content}>
                    {children}
                </div>
            <footer className={styles.copyright}>
                <span>(c) 2023 EstraLabs</span>
            </footer>
        </div>
    )
}