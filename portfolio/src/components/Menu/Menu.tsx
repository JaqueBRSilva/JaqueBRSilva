import './Menu.sass'

export default function Menu() {

    return (
        <header className="menu">
            <ul>
                <li>
                    <a href="/" className="header-nav">
                        Home
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="#about" className="header-nav">
                        Sobre
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="#languages-list" className="header-nav">
                        Linguagens
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="#projects" className="header-nav">
                        Projetos
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="#contact" className="header-nav">
                        Contato
                    </a>
                </li>
            </ul>
        </header>
    )
}