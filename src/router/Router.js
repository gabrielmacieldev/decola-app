import React from "react";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Signup/Signup";
import { Form } from "../Pages/Form/Form"
import { BrowserRouter, Routes } from "react-router-dom";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}