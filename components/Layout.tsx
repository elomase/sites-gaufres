import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div className="page-container">
            <header className="header">
                <nav>
                    <Link href="/">
                        <a>Accueil</a>
                    </Link>
                    <Link href="/menu">
                        <a>Menu</a>
                    </Link>
                    <Link href="/commandes">
                        <a>Mes Commandes</a>
                    </Link>
                </nav>
            </header>

            {children}

            <footer className="footer">
                <p>&copy; 2023 Délicieuses Gaufres - Commandez sur place ou à emporter</p>
            </footer>
        </div>
    );
}
