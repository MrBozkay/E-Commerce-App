import { useEffect } from 'react';
import {  createContext } from "react";
import {products} from "../assets/frontend_assets/assets";
import { useState } from "react";



// Create a new context called ShopContext
export const ShopContext=createContext();

const ShopContextProvider = (props) => {

    //
    const currency="$";
    const shopFee= 10;
    const [showSearch, setShowSearch] = useState(false)
    const [searchitem, setSearchItem] = useState("")
    const [carts, setCarts] = useState({})

    const structuredClone = (obj) => JSON.parse(JSON.stringify(obj))

    /* add to cart function */ 
    const addToCart = (itemId,size,quantity) => {
        let carditems = structuredClone(carts);
        console.log(carditems);

        if (carditems[itemId]) {
               console.log("carditems",carditems[itemId]);
               console.log("size",size)
            if (carditems[itemId][size]) {
                carditems[itemId][size].quantity += quantity;
            } else {
                carditems[itemId][size] = { quantity };
            }
        } else {
            carditems[itemId] = {};
            carditems[itemId][size] = { quantity };
        }

        setCarts(carditems);

        console.log(carditems);

    }


    const contextValue={
        // Shop data and methods
        currency,
        shopFee,
        products,
        showSearch,
        setShowSearch,
        searchitem,
        setSearchItem ,
        carts,
        addToCart,
        // Add methods for shopping cart, checkout, etc.
    };


    useEffect(() => {
        console.log(carts);
    }, [carts])

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;