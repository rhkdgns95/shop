import React, { Children } from "react";
import { useQuery } from "react-apollo";
import { GET_PRODUCTS } from "./HomeQueries";



interface IHomeContext {
    productsData: IGetProductsResponse | undefined
}
const InitHomeContext: IHomeContext = {
    productsData: undefined
};

const HomeContext: React.Context<IHomeContext> = React.createContext<IHomeContext>(InitHomeContext);
const useHomeContext = () => React.useContext(HomeContext);

const useFetch = (): { value: IHomeContext } => {
    const { data: productsData } = useQuery<IGetProductsResponse, any>(GET_PRODUCTS, {
        onError: data => {
            console.log("GET_PRODUCTS error: ", data);
        }
    });

    return {
        value: {
            productsData
        }
    }
}

const HomeProvider: React.FC<any> = ({
    children
}) => {
    return (
        <HomeContext.Provider { ...useFetch() }>
            {
                children
            }
        </HomeContext.Provider>
    )
};

export { useHomeContext };
export default HomeProvider;