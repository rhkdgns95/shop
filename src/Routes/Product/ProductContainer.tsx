import React, { useEffect } from "react";
import ProductPresenter from "./ProductPresenter";
import ProductProvider, { useProductProvider } from "./ProductProvider";
import { RouteComponentProps } from "react-router";
import { useAppContext } from "../App/AppProvider";

interface IProps extends RouteComponentProps<any, any>{

}
const Product: React.FC<IProps> = ({
    children,
    match,
    history
}) => {
    const { params } = match;
    if(!params.product_id) {
        history.push("/");
    }

    return (
        <ProductProvider productId={params.product_id}>
            <ProductContainer/>
        </ProductProvider>
    )
}

const ProductContainer = () => <ProductPresenter />;

export default Product;