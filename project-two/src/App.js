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
import UserPage from "./components/usePage";


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
              Пизда бляяяяять
              ну уёбок чисто 
              еблан из-за которого я сосал меня ебали дважды
              я то думаю почему ничего работает
              ОКАЗЫВАЕТСЯ вместо component={<NewCars/>} 
              НАДО БЫЛО ИСПОЛЬЗОВАТЬ element={<NewCars/>}

              моё охуевшее ебало представили?

              знаете у кого ещё было охуевшее лицо?
              
              у Майкла Джексона
            */}
            <Route path="/registerFrom" element={<RegisterForm />} />
            <Route path="/new" element={ <NewCars /> } />
            <Route path="/used" element={ <UsedCars /> } />
            <Route path="/cars/:id" element={<CarsPage/>} />
            <Route path="/usePage" element={<UserPage />} />
          </Routes>
          <Footer />
      </Router>

    </div>
  );
}

export default App;
