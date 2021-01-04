import React, { createContext, useState, useContext, useEffect } from "react";
import GroupModel from "../models/group-model";

const GroupContext = createContext(null);

export default function GroupProvider({ children }) {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        GroupModel.getAll().then(grp => setGroups(grp));
    }, [groups]);

    return (
        <GroupContext.Provider value={{ groups, setGroups }}>
            {children}
        </GroupContext.Provider>
    );
}

export function useGroups() {
    const context = useContext(GroupContext);
    if (!context) throw new Error("useGroup must be used wihtin a GroupProvider");
    const { groups, setGroups } = context;
    return { groups, setGroups };
}