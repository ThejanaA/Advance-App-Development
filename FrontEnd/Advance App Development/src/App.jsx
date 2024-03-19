import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import UserPanel from "./Pages/UserPanel";
import Adminlogin from "./Pages/Adminlogin";
import RegistrationPage from "./Components/Register";
import Application from "./Components/Application";
import Viewinstitution from "./Components/Viewinstitution";
import Payment from "./Components/Payment";
import Footer from "./Pages/Footer";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import Profile from "./Components/Profile";
import Cards from "./Cards";
import Paymenthistory from "./Pages/PaymentHistory";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Signup />}></Route>
        <Route path="/adminlogin" element={<Adminlogin />}></Route>
        <Route path="/userpanel" element={<UserPanel />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/application" element={<Application />}></Route>
        <Route path="/viewinstitution" element={<Viewinstitution />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/adminDash" element={<AdminDashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/paymenthistory" element={<Paymenthistory />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
