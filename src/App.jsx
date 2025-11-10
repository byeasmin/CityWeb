import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import CO2Emissions from './pages/features/CO2Emissions'
import AIIntelligence from './pages/features/AIIntelligence'
import AirQuality from './pages/features/AirQuality'
import LivabilityScore from './pages/features/LivabilityScore'
import SmartDrainage from './pages/features/SmartDrainage'
import UrbanHealth from './pages/features/UrbanHealth'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/co2-emissions" element={<CO2Emissions />} />
            <Route path="/ai-intelligence" element={<AIIntelligence />} />
            <Route path="/features/air-quality" element={<AirQuality />} />
            <Route path="/features/livability-score" element={<LivabilityScore />} />
            <Route path="/features/smart-drainage" element={<SmartDrainage />} />
            <Route path="/features/urban-health" element={<UrbanHealth />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App