import React, {useContext} from "react";
import { CarritoContext } from "../context/CarritoContext";


function Carrito() {

    const {carrito} = useContext(CarritoContext);

    return (
        <div>
            <h1>Carrito</h1>
            {carrito.length > 0 && carrito.map((item, index) => (
                <div key={index}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <button>Quitar del Carrito</button>
                </div>
            ))}
        </div>
    );
}

export default Carrito;