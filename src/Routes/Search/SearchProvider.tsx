import React, { useState, useContext, useEffect, useRef } from "react";
import { useQuery, useLazyQuery } from "react-apollo";
import { SEARCH_PRODUCTS } from "./SearchQueries";

interface IContext {
    searchText: IUseInput;
    searchLoading: boolean;
    searchResult: ISearchProductQueryResponse | undefined
};

const InitContext: IContext = {
    searchText: { value: "", onChange: () => {} },
    searchLoading: false,
    searchResult: undefined
};

const SearchInterval: number = 1000;
const SearchContext: React.Context<IContext> = React.createContext<IContext>(InitContext);
const useSearchContext = () => useContext(SearchContext);

const useInput = (initValue: string): IUseInput => {
    const [ value, setValue ] = useState<string>(initValue);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { value }} = event;
        setValue(value);
    }
    
    return {
        value,
        onChange
    };
};

const useFetch = (): {value: IContext } => {
    const searchText = useInput("");
    let time = useRef<any>({});
    
    const [ searchQuery, { data: searchResult, loading: searchLoading }] = useLazyQuery<ISearchProductQueryResponse, ISearchProductQueryVariables>(SEARCH_PRODUCTS, {
        onCompleted: data => {
            // console.log("DATA: ", data);
        },
        onError: data => {
            console.log("Search Data error: ", data);
        }
    });
    
    console.log("searchResult: ", searchResult);
    const Searching = () => {
        // console.log("Searching...");
        searchQuery({
            variables: {
                text: searchText.value
            }
        });
    }

    useEffect(() => {
        if(time.current) {
            clearTimeout(time.current);
        }
        if(searchText.value !== "") {
            time.current = setTimeout(Searching, SearchInterval);
        }
    }, [ searchText.value ]);

    return {
        value: {
            searchText,
            searchLoading,
            searchResult
        }
    };
};

const SearchProvider: React.FC<any> = ({
    children
}) => {
    const data = useFetch();

    return (
        <SearchContext.Provider {...data}>
            {
                children
            }
        </SearchContext.Provider>
    ) 
}

export { useSearchContext };
export default SearchProvider;