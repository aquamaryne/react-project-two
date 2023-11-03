import React from "react";
import 'tailwindcss/tailwind.css'
import Navbar from "./components/navbar";
import NewCars from "./components/new";
import UsedCars from "./components/used";
import RegisterForm from "./components/registerFrom";
import CarsPage from "./components/cars";
import ShowRoom from "./components/carsShowRoom";
import Footer from "./components/footer";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarsComponents from "./components/carComponents";
import ComponentApi from "./components/componentsapi";


function App() {

  return (
    <div>
      <Helmet>
        <title> InsideCars </title>
      </Helmet>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={ <ShowRoom /> }/>

            {/* 
              component!={<NewCars/>} 
              element={<NewCars/>}
            */}
            <Route path="/registerFrom" element={<RegisterForm />} />
            <Route path="/new" element={ <NewCars /> } />
            <Route path="/used" element={ <UsedCars /> } />
            <Route path="/carComponents" element={ <CarsComponents />} />
            <Route path="/cars/:id" element={<CarsPage/>} />
            <Route path="/componentsapi/:id" element={<ComponentApi />} />
          </Routes>
          <Footer />
      </Router>

    </div>
  );
}

export default App;
