import styles from './App.module.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './components/Home/Home'
import { PortfolioDetail } from './components/PortfolioDetail/PortfolioDetail'

function App() {

  return (
    <div id='appReact' className={styles.app}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio/:portfolio" element={<PortfolioDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App