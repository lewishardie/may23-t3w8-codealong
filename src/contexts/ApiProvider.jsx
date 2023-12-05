// Data we want to store in this context provider:
// https://pokeapi.co/api/v2

import { createContext } from "react";

// default value for the app to fall back on
export const ApiContext = createContext("https://pokeapi.co/api/v2")

//
export function ApiProvider(props){
    return (
        <ApiContext.Provider>
            {props.children}
        </ApiContext.Provider>
    )
}
