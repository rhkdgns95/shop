import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { GET_PRODUCTS } from "./HomeQueries";

interface IHomeContext {
    productsData: IGetProductsResponse | undefined;
    categoryId: string;
    onClickCategory: (categoryId: string) => any;
}
const InitHomeContext: IHomeContext = {
    productsData: undefined,
    categoryId: "",
    onClickCategory: () => {}
};

const HomeContext: React.Context<IHomeContext> = React.createContext<IHomeContext>(InitHomeContext);
const useHomeContext = () => React.useContext(HomeContext);

const useFetch = (): { value: IHomeContext } => {
    const [ categoryId, setCategoryId ] = useState("");
    
    const onClickCategory = (id: string) => {
        setCategoryId(id);
    }

    const { data: productsData } = useQuery<IGetProductsResponse, IGetProductsQueryVariables>(GET_PRODUCTS, {
        variables: {
            id: categoryId !== "" ? categoryId: undefined
        },
        onError: data => {
            console.log("GET_PRODUCTS error: ", data);
        },
    });
    return {
        value: {
            productsData,
            onClickCategory,
            categoryId
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