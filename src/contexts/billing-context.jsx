import React, { createContext, useState, useContext } from "react";
import BillingModel from "../models/billing-model";

const BillingContext = createContext([null]);

export default function BillingProvider({ children }) {
    const [billings, setBillings] = useState([]);

    return (
        <BillingContext.Provider value={{ billings, setBillings }}>
            {children}
        </BillingContext.Provider>
    );
}

export function useBillings() {
    const context = useContext(BillingContext);
    if (!context) throw new Error("useBillings must be used within a BillingProvider");
    const { billings, setBillings } = context;
    return { billings, setBillings };
}