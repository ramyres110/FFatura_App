import React, { createContext, useState, useContext } from "react";
import ClientModel from "../models/client-model";

const ClientContext = createContext(null);

export default function ClientProvider({ children }) {
    const [client, setClient] = useState(null);

    return (
        <ClientContext.Provider value={{ client, setClient }}>
            {children}
        </ClientContext.Provider>
    );
}

export function useClient() {
    const context = useContext(ClientContext);
    if (!context) throw new Error("useClient must be used within a ClientProvider");
    const { client, setClient } = context;
    return { client, setClient };
}