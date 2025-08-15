import { createContext, useContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/foodService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});

    const increaseQty = (foodId) => {
        setQuantities ((prev) => ({...prev, [foodId]: (prev[foodId] || 0) + 1}));
    }
    
    const decreaseQty = (foodId) => {
        setQuantities ((prev) => ({...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1:0}));
    };

    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) =>{
            const updatedQuantities = {...prevQuantities};
            delete updatedQuantities[foodId];
            return updatedQuantities;
        } )

    }
    const contextValue = {
        foodList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart
    };

    useEffect(() => {
        async function loadData(){
           const data = await fetchFoodList();
           setFoodList(data);
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}