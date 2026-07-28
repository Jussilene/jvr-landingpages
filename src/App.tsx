import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Legal from './pages/Legal'
import TemplatePage from './templates/TemplatePage'

function ScrollAndTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (pathname === '/') document.title = 'JVR Landing Pages | Sites profissionais'
  }, [pathname])
  return null
}

export default function App() {
  return <>
    <ScrollAndTitle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates/:slug" element={<TemplatePage />} />
      <Route path="/politica-de-privacidade" element={<Legal type="privacy" />} />
      <Route path="/termos-de-servico" element={<Legal type="terms" />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </>
}
