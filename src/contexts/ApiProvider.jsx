// Data we want to store in this context provider:
// https://pokeapi.co/api/v2/

import { createContext, useState } from "react";

export const ApiContext = createContext("https://pokeapi.co/api/v2/");

// console.log("process.env.API_URL value: " + process.env.REACT_APP_API_URL);

export function ApiProvider(props){
    // -- useState hook, which is providing 
    let [ url, setUrl ] = useState (process.env.REACT_APP_API_URL);

	return (
        //-- sets the useState hook to be shared throughout the rest of the data
		<ApiContext.Provider value={{url, setUrl}}>
			{props.children}
		</ApiContext.Provider>
	)
}
