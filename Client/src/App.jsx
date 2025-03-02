
// import { Router } from 'react-router-dom';
import AboutUs from './pages/aboutUs/AboutUs'
// import DonationForm from './pages/donations/dd';
import { Router, Routes, Route } from 'react-router-dom';
import Donate from './pages/donations/Donate';
import Request from './pages/requests/Request';
import RequestForm from './pages/requests/RequestForm';
import Routedd from './pages/routedashboard/Routedd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Routedoner from './pages/routedashboard/Routedoners';
import DonationSection from './pages/donations/card';
import PaymentPage from './pages/donations/payment';
import Requestcard from './pages/donations/requests';

function App() {
  

  return (
    <>
  {/* 
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
   */}
   {/* <Routedoner/> */}
   {/* <Navbar/> */}
   {/* <DonationSection/> */}
   {/* <Requestcard/> */}

    {/* <PaymentPage/> */}
   {/* <Footer/> */}
   <Routedd></Routedd>
    {/* <Routedd/> */}
   
 </>
  )
}

export default App;
