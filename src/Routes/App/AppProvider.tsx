import React from "react";
import { useQuery } from "react-apollo";
import { GET_CATEGORIES } from "./AppQueries";
import NavBar from "../../Components/NavBar";

interface IContext {
    categoriesData: IGetCategoriesResponse | undefined
}

const InitContext: IContext = {
    categoriesData: undefined
};

const AppContext: React.Context<IContext> = React.createContext<IContext>(InitContext);
const useAppContext = () => React.useContext(AppContext);

const useFetch = (): {value: IContext} => {
    const {data: categoriesData} = useQuery<IGetCategoriesResponse, any>(GET_CATEGORIES, {
        onError: data => {
            console.log("Get Categories error: ", data);
        }
    })

    return {
        value: {
            categoriesData
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
                data.value &&
                data.value.categoriesData && <NavBar categories={data.value.categoriesData.categories}/>
            }
            {
                children
            }
        </AppContext.Provider>
    )
};

export { useAppContext };
export default AppProvider;