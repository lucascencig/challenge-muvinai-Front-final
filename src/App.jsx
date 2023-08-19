import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS:
import LandingPage from './components/LandingPage/LandingPage';
import Admin from './components/Admin/Admin';
import AllClients from './components/Admin/AllClients/AllClients';
import NewClient from './components/Admin/NewClient/NewClient';
// import FitMedical from './components/Admin/FitMedical/FitMedical';
import UpdateClient from './components/UpdateClient/UpdateClient';


import './index.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/all-clients" element={<AllClients />} />
        <Route exact path="/new-client" element={<NewClient />} />
        <Route exact path="/clients/:id" element={<UpdateClient />} />




      </Routes>
    </Router>
  )
}

export default App
