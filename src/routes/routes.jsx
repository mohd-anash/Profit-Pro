import React, { Suspense } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Login from "../views/Login/Login"
import Dashboard from "../views/Dashboard/dashboard"



const WebRoutes = () => {
    return (
        <>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default WebRoutes;