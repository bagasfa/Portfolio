import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './components/Home/Home'
import { PortfolioDetail } from './components/DetailPortfolio/PortfolioDetail/PortfolioDetail'
import { BlankPage } from './components/BlankPage/BlankPage'

function App() {
  return (
    <div id='appReact' className={styles.app}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio/:portfolio" element={<PortfolioDetail />} />
          <Route path="*" element={<BlankPage blankText='404: Masterpiece Missing! <br/> <div className="font-18 text-muted">The Digital Artistry You Seek Has Vanished into the Abyss</div>'/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App