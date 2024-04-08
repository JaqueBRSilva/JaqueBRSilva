import './App.sass'
import About from './app/about/about'
import FeaturedProjects from './app/featured-projects/featured-projects'
import LanguagesList from './app/languages-list/languages-list'
import Presentation from './app/presentation/presentation'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <>
      <Menu />

      <>
        <div id="top-button">
        </div>

        <section className="" id='presentation'>
          <Presentation />
        </section>

        <section className="section-area" id="about">
          <About />
        </section>

        <section className="section-area" id='languages-list'>
          <LanguagesList />
        </section>

        <section className="section-area" id='projects'>
          <FeaturedProjects />
        </section>
      </>

      <Footer />
    </>
  )
}

export default App
