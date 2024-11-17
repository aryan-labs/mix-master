import React, { createContext, useState } from "react";

export const StoreContext=createContext()

const StoreContextProvider = (props) => {
    const [search,setSearch]=useState('');
    const [searchItem,setSearchItem]=useState('a')
    const contextValue={search,setSearch,searchItem,setSearchItem

    }
  return (
    <div>
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
    </div>
  )
}

export default StoreContextProvider
