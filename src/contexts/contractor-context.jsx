import React, { createContext, useState, useContext, useEffect } from "react";
import ContractorModel from "../models/contractor-model";

const ContractorContext = createContext(null);

export default function ContractorProvider({ children }) {
    const [contractors, setContractors] = useState([]);

    useEffect(() => {
        ContractorModel.getAll().then(ct => setContractors(ct));
    }, [contractors]);

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