import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experiences } from './components/Experiences/Experiences'
import { Educations } from './components/Educations/Educations'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <About />
      <Experiences />
      <Educations />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
