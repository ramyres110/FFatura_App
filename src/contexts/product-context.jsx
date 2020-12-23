import React, { createContext, useState, useContext } from "react";
import ProductModel from "../models/product-model";

const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
    const [product, setProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProduct must be used within a ProductProvider");
    const { product, setProduct } = context;
    return { product, setProduct };
}