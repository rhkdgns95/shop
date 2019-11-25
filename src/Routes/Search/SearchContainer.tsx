import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import SearchProvider, { useSearchContext } from "./SearchProvider";


const Search = () => (
    <SearchProvider>
        <SearchContainer />
    </SearchProvider>
);

const SearchContainer = () => {
    const { searchText, searchLoading, searchResult } = useSearchContext();
    return <SearchPresenter 
            searchText={searchText} 
            searchLoading={searchLoading}
            searchResult={searchResult}
        />
};

export default Search;