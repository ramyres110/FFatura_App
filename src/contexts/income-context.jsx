import React, { createContext, useState, useContext } from "react";
import IncomesModel from "../models/income-model";

const IncomeContext = createContext(null);

export default function IncomeProvider({ children }) {
    const [incomes, setIncomes] = useState([]);

    return (
        <IncomeContext.Provider value={{ incomes, setIncomes }}>
            {children}
        </IncomeContext.Provider>
    );
}

export function useIncomes() {
    const context = useContext(IncomeContext);
    if (!context) throw new Error("useIncomes must be used wihtin a IncomeProvider");
    const { incomes, setIncomes } = context;
    return { incomes, setIncomes };
}