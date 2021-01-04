import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    const { user, setUser } = context;
    return { user, setUser };
}