import React, { createContext, useState, useContext, useEffect } from "react";
import GoalModel from "../models/goal-model";

const GoalContext = createContext(null);

export default function GoalProvider({ children }) {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        GoalModel.getAll().then(gs => setGoals(gs));
    }, [goals]);

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