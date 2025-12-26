import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Essays from './pages/Essays'
import EssayDetail from './pages/EssayDetail'
import Fragments from './pages/Fragments'
import Themes from './pages/Themes'
import ThemeDetail from './pages/ThemeDetail'
import Life from './pages/Life'
import LifeChapter from './pages/LifeChapter'
import About from './pages/About'
import NotFound from './pages/NotFound'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:slug" element={<EssayDetail />} />
          <Route path="/fragments" element={<Fragments />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/themes/:slug" element={<ThemeDetail />} />
          <Route path="/life" element={<Life />} />
          <Route path="/life/:slug" element={<LifeChapter />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
