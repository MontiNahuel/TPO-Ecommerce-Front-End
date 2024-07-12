import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
function Catalogo() {
    
    const navigate = useNavigate();
    const {username} = React.useContext(AuthContext);
    const {agregarProducto} = React.useContext(CarritoContext);
    const [productos, setProductos] = useState([
        {nombre: 'Computadora', precio: 200, stock: 10}, 
        {nombre: 'Impresora', precio: 250, stock: 20}
    ]);

    const handleVerCarrito = () => {
        // Ver Carrito
        navigate('/carrito');
    }

    const handleAgregarProducto = (producto) => {
        agregarProducto(producto);
    }

    return (
        <div>
            <h2>Bienvenido {username}</h2>
            <h1>Productos Disponibles</h1>
            <div style={{display: "flex"}}>
                {productos.map((item, index) => (
                    <div key={index}>
                        <h3>{item.nombre}</h3>
                        <p>Precio: ${item.precio}</p>
                        <p>Stock: {item.stock}</p>
                        <button onClick={() => handleAgregarProducto(item)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
            <button onClick={handleVerCarrito}>Ver Carrito</button>
        </div>
    );
}

export default Catalogo;