import React, { useEffect } from "react";
import ProductPresenter from "./ProductPresenter";
import ProductProvider from "./ProductProvider";
import { RouteComponentProps } from "react-router";

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