import "../styles/Layout.css";

export default function Layout({ children }) {
    return (
        <div>
            <header className="title">
                <h1>EstraLabs</h1>
            </header>
                <div className="content">
                    {children}
                </div>
            <footer className="copyright">
                <span>(c) 2023 EstraLabs</span>
            </footer>
        </div>
    )
}