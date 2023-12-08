// Data we want to store in this context provider:
// https://pokeapi.co/api/v2/

import { createContext, useEffect, useState } from "react";


export const ApiContext = createContext("https://pokeapi.co/api/v2/");

// console.log("process.env.API_URL value: " + process.env.REACT_APP_API_URL);

export function ApiProvider(props){
    // -- useState hook, which is providing 
    let [ url, setUrl ] = useState (process.env.REACT_APP_API_URL);

    useEffect(() => {
		console.log("API URL is :" + url);
		

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return (
        //-- sets the useState hook to be shared throughout the rest of the data
		<ApiContext.Provider value={{url, setUrl}}>
			{props.children}
		</ApiContext.Provider>
	)
}
