import React, { createContext, useState, useContext } from "react";
import GroupModel from "../models/group-model";

const GroupContext = createContext(null);

export default function GroupProvider({ children }) {
    const [groups, setGroups] = useState([]);

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