import '@/app/styles/globals.css';
import '@/app/styles/admin/header.css';

export default function Header() {
    return(
        <header>
            <div className="container">
                <div>
                    <h1 id="logo">Liquor Stop</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#inventory">Inventory</a></li>
                        <li><a href="#about-1">View Site</a></li>
                        <li><a href="#contact">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
