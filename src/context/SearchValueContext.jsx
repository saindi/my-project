import {createContext, useState} from "react";


export const SearchValueContext = createContext(null);
SearchValueContext.displayName = "SearchValueContext";

const SearchValueContextProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('')

    const changeSearchValue = (value) => {
        setSearchValue(value);
    };

    const contextValue = {
        searchValue: searchValue,
        changeSearchValue: changeSearchValue
    };

    return (
        <SearchValueContext.Provider value={contextValue}>
            {children}
        </SearchValueContext.Provider>
    );
};

export default SearchValueContextProvider;