import React, { createContext, useState, useContext } from "react";
import GoalModel from "../models/goal-model";

const GoalContext = createContext(null);

export default function GoalProvider({ children }) {
    const [goals, setGoals] = useState([]);

    return (
        <GoalContext.Provider value={{ goals, setGoals }}>
            {children}
        </GoalContext.Provider>
    );
}

export function useGoal() {
    const context = useContext(GoalContext);
    if (!context) throw new Error("useGoal must be used wihtin a GoalProvider");
    const { goals, setGoals } = context;
    return { goals, setGoals };
}