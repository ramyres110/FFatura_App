import React, { createContext, useState, useContext } from "react";
import IncomesModel from "../models/income-model";

const IncomeContext = createContext(null);

export default function IncomeProvider({ children }) {
    const [income, setIncome] = useState(null);

    return (
        <IncomeContext.Provider value={{ income, setIncome }}>
            {children}
        </IncomeContext.Provider>
    );
}

export function useIncome() {
    const context = useContext(IncomeContext);
    if (!context) throw new Error("useIncome must be used wihtin a IncomeProvider");
    const { income, setIncome } = context;
    return { income, setIncome };
}