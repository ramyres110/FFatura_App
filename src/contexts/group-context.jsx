import React, { createContext, useState, useContext } from "react";
import GroupModel from "../models/group-model";

const GroupContext = createContext(null);

export default function GroupProvider({ children }) {
    const [groups, setGroups] = useState([
        {
            uid: "d2858d03-8bed-4710-9469-330612d44f0b",
            name: "Medicamento",
            commission: 0.05
        },
        {
            uid: "b9dd39da-8992-4b6b-8100-60ab1369d22f",
            name: "Atendimento",
            commission: 0.5
        },
        {
            uid: "71bb4ee9-99cb-409a-a28f-3777cfa0385c",
            name: "Ambulatório",
            commission: 0.1
        },
    ]);

    return (
        <GroupContext.Provider value={{ groups, setGroups }}>
            {children}
        </GroupContext.Provider>
    );
}

export function useGroup() {
    const context = useContext(GroupContext);
    if (!context) throw new Error("useGroup must be used wihtin a GroupProvider");
    const { groups, setGroups } = context;
    return { groups, setGroups };
}