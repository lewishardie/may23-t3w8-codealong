import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const StorageContext = createContext({});

export function StorageProvider(props){

    //-- copy of localstorage
    let [storageState, setStorageState] = useState({url:""});
    
    //--  localstorage
    let [storage, setStorage] = useLocalStorage("pokemonTeamApp", {url:""});

    // componentDidMount
    useEffect(() => {

        setStorageState(storage);
        
        //-- componentWillUnmount
        return () => {
            setStorage(storageState);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
		console.log("Storage provider state copy is:");
		console.log(storageState);
	}, [storageState]);


    return (
        <StorageContext.Provider value={{storageState, setStorageState}}>
            {props.children}
        </StorageContext.Provider>
    )
}