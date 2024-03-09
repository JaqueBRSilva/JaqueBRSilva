import aboutIMG from '../../assets/about-128x128.png'
import './about.sass'

export default function About() {

    return (
        <div className="about-content">
            <h1>Sobre</h1>

            <div className="about-main-container">
                <picture className='image-container'>
                    <img src={aboutIMG} alt="about icon" />
                </picture>

                <div>
                    <p className="resume">
                        Formada em Ciência da Computação na Universidade Paulista (UNIP), me apeguei ao lado "que o
                        cliente vê primeiro" e segui carreira Front-end. Desde então, venho focando em continuar aprendendo a fim de
                        melhorar minhas habilidades e seguir crescente na carreira.
                        <br />
                        <br />
                        Sou Desenvolvedora Front-end há mais de 2 anos, topo desafios para
                        sair da 'mesmice' e aprender algo novo, principalmente ter aquela satisfação de missão cumprida; 'eu
                        ajudei a construir algo'.
                        <br />
                        <br />
                        No tempo livre, às vezes jogo no computador, assisto gameplays, filmes e séries.
                    </p>
                </div>
            </div>
        </div>
    )
}
