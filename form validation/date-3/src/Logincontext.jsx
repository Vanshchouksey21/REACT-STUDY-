import { createContext, useState } from "react";

const myContext = createContext();

const Logincontext = ({ children }) => {
    const [user, setUser] = useState({ name: "", auth: false });

    const login = (nm) => {
        setUser({ name: nm, auth: true });
    };

    const logout = () => {
        setUser({ name: "", auth: false });
    };

    return (
        <myContext.Provider value={{ user, login, logout }}>
            {children}
        </myContext.Provider>
    );
};

export default Logincontext;
export { myContext };
