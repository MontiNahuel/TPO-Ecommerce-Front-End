import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CarritoContext, CarritoProvider } from "../context/CarritoContext";
import Login from "./auth/Login";
import Catalogo from "./Catalogo";
import Carrito from "./Carrito";
import Navbar from "./Navbar";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

function RouterComponent() {

    return (
        <Router>
            <RoutesComponent />
        </Router>
    );
}

function RoutesComponent() {

    const { isAuthenticated } = React.useContext(AuthContext);
    const location = useLocation();
    return (
        <>
            {(location.pathname !== '/' && location.pathname !== '/register' && location.pathname !== '/forgot') && <Navbar />}
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/catalogo" /> : <Login />} />
                <Route path="/register" element={<Register />}/>
                <Route path="/forgot" element={<ForgotPassword />}/>
                {/* Rutas que requieren CarritoProvider */}
                <Route 
                    path="/catalogo" 
                    element={isAuthenticated ? <CarritoProvider><Catalogo /></CarritoProvider> : <Navigate to="/" />} 
                />
                <Route
                    path="/carrito"
                    element={isAuthenticated ? <CarritoProvider><Carrito /></CarritoProvider> : <Navigate to="/" />}
                />
            </Routes>
        </>
    );
}

export default RouterComponent;
