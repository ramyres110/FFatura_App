import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import ClientModel from "../models/client-model";

const ClientContext = createContext(null);

export default function ClientProvider({ children }) {
    const [clients, setClients] = useState([
        {
            "uid": "6f4ca514-3f50-4f79-b0b6-c9bf423fbefe",
            "name": "Ramyres Aquino",
            "document": "123456789",
            "email": "ramyres@gmail.com",
            "phone": "6299363640",
            "address": "",
        },
        {
            "uid": "961007e2-f52c-410b-b6dc-7ec41e659845",
            "name": "Weder Carlos",
            "document": "132456",
            "email": "weder@hotmail.com",
            "phone": "85212227",
            "address": "",
        },
        {
            "uid": "bd01eb07-3540-46bd-8297-6b1511315c36",
            "name": "Ana Maria Mendonça de Meneses Pereira Aquino",
            "document": "321654987",
            "email": "ana@teste.com",
            "phone": "62986532147",
            "address": "",
        }
    ]);

    useEffect(() => {
        ClientModel.getAll().then((clients) => setClients(clients));
    }, []);

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