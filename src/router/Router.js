import React from "react";
import Login from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import { Form } from "../Pages/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetails from "../Pages/Contact Details/ContactDetails";
import Training from "../Pages/Training/Training";
import Experience from "../Pages/Experience/Experience";
import Rocket from "../Pages/Rocket/Rocket";

const Router = () => {

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/form" element={<Form />} />
                <Route path="/contactdetails" element={<ContactDetails />} />
                <Route path="/training" element={<Training />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/rocket" element={<Rocket />} />
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/contactdetails" element={<ContactDetails/>} />
                <Route path="/Training" element={<Training/>} />
                <Route path="/Experience" element={<Experience/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
