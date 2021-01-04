import React, { createContext, useState, useContext, useEffect } from "react";
import ServiceModel from "../models/service-model";

const ServiceContext = createContext(null);

export default function ServiceProvider({ children }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        ServiceModel.getAll().then(ser => setServices(ser));
    }, [services]);

    return (
        <ServiceContext.Provider value={{ services, setServices }}>
            {children}
        </ServiceContext.Provider>
    );
}

export function useServices() {
    const context = useContext(ServiceContext);
    if (!context) throw new Error("useService must be used within a ServiceProvider");
    const { services, setServices } = context;
    return { services, setServices };
}