import { createContext, useState } from "react";

//1. Context 생성
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <AuthContext.Provider value={{isLogin, setIsLogin}}>
            {children}
        </AuthContext.Provider>
    );
}