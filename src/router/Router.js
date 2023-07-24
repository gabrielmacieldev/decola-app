import React from "react";
import Login  from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import { Form } from "../Pages/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/form" element={<Form/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router