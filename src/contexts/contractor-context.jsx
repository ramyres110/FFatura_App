import React, { createContext, useState, useContext } from "react";
import ContractorModel from "../models/contractor-model";

const ContractorContext = createContext([null]);

export default function ContractorProvider({ children }) {
    const [contractors, setContractors] = useState([]);

    return (
        <ContractorContext.Provider value={{ contractors, setContractors }}>
            {children}
        </ContractorContext.Provider>
    );
}

export function useContractors() {
    const context = useContext(ContractorContext);
    if (!context) throw new Error("useContractor must be used wihtin a ContractorProvider");
    const { contractors, setContractors } = context;
    return { contractors, setContractors };
}