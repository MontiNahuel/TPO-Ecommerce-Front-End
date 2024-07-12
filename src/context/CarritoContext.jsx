import React from "react";

export const CarritoContext = React.createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = React.useState([]);

    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto]);
    }

    const quitarProducto = (producto) => {
        const nuevoCarrito = carrito.filter(item => item.nombre !== producto.nombre);
        setCarrito(nuevoCarrito);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
            {children}
        </CarritoContext.Provider>
    );
}