import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TipCalculator from './pages/TipCalculator'
import CarShare from './pages/CarShare'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apps/tip-calculator" element={<TipCalculator />} />
        <Route path="/apps/car-share" element={<CarShare />} />
      </Route>
    </Routes>
  )
}
