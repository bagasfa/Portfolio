import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './components/Home/Home'
import { PortfolioDetail } from './components/DetailPortfolio/PortfolioDetail/PortfolioDetail'
import { BlankPage } from './components/BlankPage/BlankPage'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDFoCyVHicdTIYPRxrsxB3n9WOrFSAZ-yM",
    authDomain: "portfolio-bagasfa.firebaseapp.com",
    databaseURL: "https://portfolio-bagasfa-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-bagasfa",
    storageBucket: "portfolio-bagasfa.appspot.com",
    messagingSenderId: "223899021663",
    appId: "1:223899021663:web:2408b41b11d728ee9ec6ea",
    measurementId: "G-L79T79ZCKH"
  }
  
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  return (
    <div id='appReact' className={styles.app}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home analytics={analytics} />} />
          <Route path="/portfolio/:portfolio" element={<PortfolioDetail />} />
          <Route path="*" element={<BlankPage blankText='404: Masterpiece Missing! <br/> <div className="font-18 text-muted">The Digital Artistry You Seek Has Vanished into the Abyss</div>'/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App