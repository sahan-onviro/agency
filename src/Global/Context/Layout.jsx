import { createContext, useContext } from "react";
import Navbar from "../Components/Navbar";

const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
    return (
        <LayoutContext.Provider value=''>
            <Navbar />
            {children}
        </LayoutContext.Provider>
    )
}
export const useLayoutContext = () => useContext(LayoutContext);