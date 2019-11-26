import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { GET_CATEGORIES } from "./AppQueries";
import convertDataURIToBinary from "../../Lib/base64";

interface IContext {
    categoriesData: IGetCategoriesResponse | undefined
    isProgress: boolean;
    handleProgress: (active: boolean) => any;
}

const InitContext: IContext = {
    categoriesData: undefined,
    isProgress: false,
    handleProgress: () => {}
};

const AppContext: React.Context<IContext> = React.createContext<IContext>(InitContext);
const useAppContext = () => React.useContext(AppContext);

const useFetch = (): {value: IContext} => {
    const [ isProgress, setIsProgress ] = useState<boolean>(false);
    const { data: categoriesData } = useQuery<IGetCategoriesResponse, any>(GET_CATEGORIES, {
        onError: data => {
            console.log("Get Categories error: ", data);
        }
    });
    const handleProgress = (active: boolean) => {
        setIsProgress(active);
    }
    
    return {
        value: {
            categoriesData,
            isProgress,            
            handleProgress
        }
    }
};

const AppProvider: React.FC<any> = ({
    children
}) => {
    const data = useFetch();
    return (
        <AppContext.Provider { ...data }>
            {
                children
            }
        </AppContext.Provider>
    )
};

export { useAppContext };
export default AppProvider;