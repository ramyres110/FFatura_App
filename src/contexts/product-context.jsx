import React, { createContext, useState, useContext, useEffect } from "react";
import ProductModel from "../models/product-model";

const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductModel.getAll().then(pro => setProducts(pro));
    }, [products]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProduct must be used within a ProductProvider");
    const { products, setProducts } = context;
    return { products, setProducts };
}