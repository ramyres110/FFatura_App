import React, { createContext, useState, useContext } from "react";
import ClientModel from "../models/client-model";

const ClientContext = createContext([null]);

export default function ClientProvider({ children }) {
    const [clients, setClients] = useState([]);

    return (
        <ClientContext.Provider value={{ clients, setClients }}>
            {children}
        </ClientContext.Provider>
    );
}

export function useClients() {
    const context = useContext(ClientContext);
    if (!context) throw new Error("useClients must be used within a ClientProvider");
    const { clients, setClients } = context;
    return { clients, setClients };
}