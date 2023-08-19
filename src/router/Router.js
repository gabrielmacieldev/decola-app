import React from "react";
import Login  from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import { Form } from "../Pages/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetails from "../Pages/Contact Details/ContactDetails";
import Training from "../Pages/Training/Training";
import Experience from "../Pages/Experience/Experience";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
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
