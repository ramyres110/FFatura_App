import React, {createContext, useState, useContext} from "react";
import ServiceModel from "../models/service-model";

const ServiceContext = createContext(null);

export default function ServiceProvider({ children }) {
    const [service, setService] = useState(null);

    return (
        <ServiceContext.Provider value={{ service, setService }}>
            {children}
        </ServiceContext.Provider>
    );
}

export function useService() {
    const context = useContext(ServiceContext);
    if (!context) throw new Error("useService must be used within a ServiceProvider");
    const { service, setService } = context;
    return { service, setService };
}