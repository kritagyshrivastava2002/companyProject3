import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Galaxy from './components/Galaxy';
import Navbar from './components/Navbar';
import Teachers from './components/Teachers';
import ProgrammeStructure from './components/ProgrammeStructure';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/Galaxy" element={<Galaxy />} />
        <Route path="/Teacher" element={<Teachers />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/ProgramStructure" element={<ProgrammeStructure />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;

