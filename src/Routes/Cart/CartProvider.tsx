import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import { GET_CARTS } from "./CartQueries";

interface IContext {
}
const InitContext: IContext = {
}
const CartContext: React.Context<IContext> = React.createContext<IContext>(InitContext);
const useCartContext = () => useContext(CartContext);

const useFetch = (): { value: IContext } => {
    
    return {
        value: {
            
        }
    };
};

const CartProvider: React.FC<any> = ({
    children
}) => (
    <CartContext.Provider { ...useFetch() }>
        {
            children
        }
    </CartContext.Provider>
)

export { useCartContext };
export default CartProvider;