import React from "react";
import Login  from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import { Form } from "../Pages/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetails from "../Pages/Contact Details/ContactDetails";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/contactdetails" element={<ContactDetails/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router