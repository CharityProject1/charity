// import { Router } from 'react-router-dom';
<<<<<<< HEAD
import AboutUs from "./pages/aboutUs/AboutUs";
// import DonationForm from './pages/donations/dd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donate from "./pages/donations/Donate";
import Request from "./pages/requests/Request";
import RequestForm from "./pages/requests/RequestForm";
import Routedd from "./pages/routedashboard/Routedd";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Routedoner from "./pages/routedashboard/Routedoners";
import DonationSection from "./pages/donations/card";
import PaymentPage from "./pages/donations/payment";
import Requestcard from "./pages/donations/requests";
=======
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
import Payment from './pages/donations/payment';
import Requestcard from './pages/donations/requests';
>>>>>>> 0b84629b60f237bff9a73dfb9502fd6854484532

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/test" element={<Requestcard />} />
        </Routes>
<<<<<<< HEAD
        <Footer />
      </Router>

      {/* <Routedoner/> */}

      {/* <DonationSection/> */}

      {/* <Routedd/> */}
      {/* <PaymentPage/> */}
    </>
  );
=======
   */}
   {/* <Routedoner/> */}
   <Navbar/>
   {/* <DonationSection/> */}
   <Payment/>
   {/* <Requestcard/> */}

    {/* <PaymentPage/> */}
   {/* <Footer/> */}
   <Routedd></Routedd>
    {/* <Routedd/> */}
   
 </>
  )
>>>>>>> 0b84629b60f237bff9a73dfb9502fd6854484532
}

export default App;
