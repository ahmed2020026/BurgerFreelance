// LanguageContext.js
import { createContext, useContext, useState } from "react";

// 1. Create context
const Language = createContext();

// 2. Provider component
export const LanguageType = ({ children }) => {
    const [lang, setLang] = useState("fi"); // default FI

    return (
        <Language.Provider value={{ lang, setLang }}>
            {children}
        </Language.Provider>
    );
};

// 3. Custom hook
export const getLanguage = () => {
    const context = useContext(Language);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageType");
    }
    return context;
};
