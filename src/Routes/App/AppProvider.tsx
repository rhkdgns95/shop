import React, { useState } from "react";
import { useQuery, useApolloClient, useMutation } from "react-apollo";
import { GET_CATEGORIES, GET_CARTS, TOGGLE_CART } from "./AppQueries";

interface IContext {
    carts: Array<T_Product>;
    categoriesData: IGetCategoriesResponse | undefined
    isProgress: boolean;
    handleProgress: (active: boolean) => any;
    toggleCart: (data: any) => any;
}

const InitContext: IContext = {
    carts: [],
    categoriesData: undefined,
    isProgress: false,
    handleProgress: () => {},
    toggleCart: () => {}
};

const AppContext: React.Context<IContext> = React.createContext<IContext>(InitContext);
const useAppContext = () => React.useContext(AppContext);

const useFetch = (): {value: IContext} => {
    const { cache } = useApolloClient();
    const { carts } = cache.readQuery({
        query: GET_CARTS
    }) || { carts: [] };
    console.log("CART: ", carts);

    const [ isProgress, setIsProgress ] = useState<boolean>(false);
    const { data: categoriesData } = useQuery<IGetCategoriesResponse, any>(GET_CATEGORIES, {
        onError: data => {
            console.log("Get Categories error: ", data);
        }
    });
    /**
     *  @param query: TOGGLE_CART
     *  cache에 cart객체에 데이터를 삽입함.
     *  장바구니 목록임.
     */
    const [ toggleCart ] = useMutation(TOGGLE_CART);
    const handleProgress = (active: boolean) => {
        setIsProgress(active);
    }
    
    return {
        value: {
            categoriesData,
            isProgress,            
            handleProgress,
            carts,
            toggleCart
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