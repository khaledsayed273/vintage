"use client";
const { createContext, useEffect, useState } = require("react");
import ToastifyComponent from "../Shared/ToastifyComponent";

export const Context = createContext();

export default function ProviderContext({ children }) {

    const { success, error } = ToastifyComponent()

    const [cartsData, setCartsData] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCarts = localStorage.getItem("carts");
            setCartsData(storedCarts ? JSON.parse(storedCarts) : []);
        }
    }, []);

    const addToCart = (item) => {
        const cartExists = cartsData.find(data => data.id === item.id);
        if (!cartExists) {
            const updatedCartsData = [...cartsData, item];
            setCartsData(updatedCartsData);
            localStorage.setItem("carts", JSON.stringify(updatedCartsData));
            success("Item added successfully");
        } else {
            error("Item already added");
        }
    };

    const deleteFromCart = (item) => {
        const newCarts = cartsData.filter((items) => {
            return items.id !== item.id
        })
        setCartsData(newCarts);
        localStorage.setItem("carts", JSON.stringify(newCarts));
        success("Item deleted successfully");
    }

    // const addToCart = (item) => {
    //     const cartExists = cartsData.find(data => data.id === item.id);
    //     if (!cartExists) {
    //         const updatedCartsData = [...cartsData, item];
    //         setCartsData(updatedCartsData);
    //         localStorage.setItem("carts", JSON.stringify(cartsData));
    //         success("Item added successfully");
    //     } else {
    //         error("Item already added");
    //     }
    // };

    return <Context.Provider value={{ addToCart, deleteFromCart, cartsData }}>{children}</Context.Provider>;
}
