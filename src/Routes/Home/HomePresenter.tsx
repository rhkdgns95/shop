import React from "react";

interface IProps {
    productsData: IGetProductsResponse | undefined
}
const HomePresenter: React.FC<IProps> = ({
    productsData
}) => {
    return (
        <div>
            {
                productsData &&
                productsData.AllProducts.map(product => 
                    <p key={product.id}>
                        {product.name}
                    </p>
                )
            }
            Hlloe
        </div>
    )
};

export default HomePresenter;