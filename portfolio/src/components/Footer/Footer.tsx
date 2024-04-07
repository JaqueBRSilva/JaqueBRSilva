import './Footer.sass'

export default function Footer() {
    const thisYear = new Date().getFullYear()
    const githubUser = 'JaqueBRSilva'

    return (
        <footer className='footer-content'>
            <div className="footer-columns-container">
                <div className='footer-column-1'>
                    <h3>Redes Sociais</h3>

                    <p className="footer-links">
                        <a href="https://github.com/JaqueBRSilva" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </p>

                    <p className="footer-links">
                        <a href="https://www.linkedin.com/in/jaqueline-silva-broccolo/" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </p>

                    <p className="footer-links">
                        <a href="https://bio.link/jaquebrsilva" target="_blank" rel="noopener noreferrer">
                            bio.link
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-credits-container">
                <p className="footer-credits-text">
                    Feito com <strong id='react'>React</strong> e <strong id='sass'>SASS</strong>
                </p>

                <p className="footer-credits-text">
                    {thisYear} ▪ {githubUser}
                </p>
            </div>
        </footer>
    )
}