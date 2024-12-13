import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { SelectOptionType } from "../../types/global";

// Define the structure for the context state
export type EngagementContextType = {
    comments: Array<{ value: string }>;
    textCard: SelectOptionType;
    commentType: SelectOptionType;
    messageType: SelectOptionType;
    integrationType: SelectOptionType;
    assistanceType: SelectOptionType;
    messageFlow: SelectOptionType;
    excludeKeywords: string[];
    triggerKeywords: string[];
    positiveReactions: Array<{ key: string; label: string }>;
    excludeKeywordVal: string;
    triggerKeywordVal: string;
};

// Define the types for actions that modify the state
export type Action =
    | { type: "SET_COMMENT"; payload: EngagementContextType["comments"] }
    | { type: "SET_TEXTCARD"; payload: EngagementContextType["textCard"] }
    | { type: "SET_COMMENTTYPE"; payload: EngagementContextType["commentType"] }
    | { type: "SET_MESSAGETYPE"; payload: EngagementContextType["messageType"] }
    | { type: "SET_ASSISTANCETYPE"; payload: EngagementContextType["assistanceType"] }
    | { type: "SET_INTEGRATIONTYPE"; payload: EngagementContextType["integrationType"] }
    | { type: "SET_MESSAGEFLOW"; payload: EngagementContextType["messageFlow"] }
    | { type: "SET_EXCLUDEKEYWORDS"; payload: string[] }
    | { type: "SET_TRIGGERKEYWORDS"; payload: string[] }
    | { type: "SET_POSITIVEREACTIONS"; payload: EngagementContextType["positiveReactions"] }
    | { type: "SET_EXCLUDEKEYWORDVAL"; payload: string }
    | { type: "SET_TRIGGERKEYWORDVAL"; payload: string }
    | { type: "RESET_STATE" };

const initialState: EngagementContextType = {
    comments: [],
    textCard: { value: "", label: "" },
    commentType: { value: "", label: "" },
    messageType: { value: "", label: "" },
    integrationType: { value: "", label: "" },
    assistanceType: { value: "", label: "" },
    messageFlow: { value: "", label: "" },
    excludeKeywords: [],
    triggerKeywords: [],
    positiveReactions: [],
    excludeKeywordVal: "",
    triggerKeywordVal: "",
};

// Reducer to manage state changes based on actions
function reducer(state: EngagementContextType, action: Action): EngagementContextType {
    switch (action.type) {
        case "SET_COMMENT":
            return { ...state, comments: action.payload };
        case "SET_COMMENTTYPE":
            return { ...state, commentType: action.payload };
        case "SET_TEXTCARD":
            return { ...state, textCard: action.payload };
        case "SET_MESSAGETYPE":
            return { ...state, messageType: action.payload };
        case "SET_MESSAGEFLOW":
            return { ...state, messageFlow: action.payload };
        case "SET_EXCLUDEKEYWORDS":
            return { ...state, excludeKeywords: action.payload };
        case "SET_TRIGGERKEYWORDS":
            return { ...state, triggerKeywords: action.payload };
        case "SET_POSITIVEREACTIONS":
            return { ...state, positiveReactions: action.payload };
        case "SET_EXCLUDEKEYWORDVAL":
            return { ...state, excludeKeywordVal: action.payload };
        case "SET_TRIGGERKEYWORDVAL":
            return { ...state, triggerKeywordVal: action.payload };
        case "SET_INTEGRATIONTYPE":
            return { ...state, integrationType: action.payload };
        case "SET_ASSISTANCETYPE":
            return { ...state, assistanceType: action.payload };
        case "RESET_STATE":
            return initialState; // Reset to initial state
        default:
            throw new Error(`Unhandled action type`); // Ensure the action type is valid
    }
}

// Create contexts for state and dispatch functions
const PostEngagementEditContext = createContext<EngagementContextType>(initialState);
const PostEngagementEditDispatchContext = createContext<Dispatch<Action>>(() => {
    throw new Error("Dispatch function not available outside of provider.");
});

// Provider component for managing the context state
export const PostEngagementEditProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PostEngagementEditContext.Provider value={state}>
            <PostEngagementEditDispatchContext.Provider value={dispatch}>
                {children}
            </PostEngagementEditDispatchContext.Provider>
        </PostEngagementEditContext.Provider>
    );
};

// Hook to access the state
export const usePostEngagementEditContext = () => {
    const context = useContext(PostEngagementEditContext);
    if (!context) {
        throw new Error("usePostEngagementEditContext must be used within a PostEngagementEditProvider");
    }
    return context;
};

// Hook to access the dispatch function
export const usePostEngagementEditDispatchContext = () => {
    const dispatch = useContext(PostEngagementEditDispatchContext);
    if (!dispatch) {
        throw new Error("usePostEngagementEditDispatchContext must be used within a PostEngagementEditProvider");
    }
    return dispatch;
};
