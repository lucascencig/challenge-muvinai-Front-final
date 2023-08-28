import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS:
import LandingPage from './components/LandingPage/LandingPage';
import Admin from './components/Admin/Admin';
import AllClients from './components/Admin/AllClients/AllClients';
import NewClient from './components/Admin/NewClient/NewClient';
import UpdateClient from './components/Admin/UpdateClient/UpdateClient';
import Pays from './components/Admin/Pays/Pays';
import FitMedicalData from './components/Admin/FitMedical/FitMedicalData/FitMedicalData';
import FitMedicalUpload from './components/Admin/FitMedical/FitMedicalUpload/FitMedicalUpload';
import ClientDetail from './components/Admin/ModalClient/ClientDetail';

// STYLES:
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
        <Route exact path="/clients/pays/:id" element={<Pays />} />
        <Route path="/clients/:id" component={<ClientDetail />} />
        <Route exact path="/clients/apto-medico/:id" element={<FitMedicalData />} />
        <Route exact path="/clients/subir-apto-medico/:id" element={<FitMedicalUpload />} />
      </Routes>
    </Router>
  )
}

export default App
