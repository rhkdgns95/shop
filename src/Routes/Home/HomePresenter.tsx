import React from "react";
import styled from "../../Styles/typed-components";
import CardItem from "../../Components/CardItem";
import { useAppContext } from "../App/AppProvider";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { useHomeContext } from "./HomeProvider";

const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const CenterLink = styled(Link)`
    font-size: 30px;
    letter-spacing: 6px;
`;
const CardItemBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
`;
const ExtendedCardItem = styled(CardItem)`
    margin: 10px;
`;
interface IProps {
    products: IGetProductsResponse | undefined
}
const HomePresenter: React.FC<IProps> = ({
    products
}) => {
    const { categoriesData } = useAppContext();
    const { onClickCategory } = useHomeContext();
    return (
        <Container>
            <Wrapper>
            {
                categoriesData &&
                categoriesData.categories && (
                    <NavBar 
                        categories={categoriesData.categories}
                        onClickCategory={onClickCategory}
                        leftMenu={
                            <Button 
                                value={"Search"}
                                path={"/search"}
                            />
                        }
                        centerMenu={
                            <CenterLink to={"/"}>SLIME</CenterLink>
                        }
                        rightMenu={
                            <Button
                                value={"Cart"}
                                path={"/cart"}
                            />
                        }
                    />
                )
            }
                <CardItemBox>
                    {
                        products &&
                        products.Products &&
                        products.Products.map(product => 
                            <ExtendedCardItem 
                            key={product.id}
                            name={product.name}
                            className={"product-card"}
                            createdAt={product.createdAt}
                            detail={product.detail}
                            category={product.category.map(category => category.name) + ""}
                            imgPath={product.photo.url}
                            price={product.price + ""}
                            id={product.id}                            
                            />
                        )
                    }
                </CardItemBox>
            </Wrapper>
        </Container>
    )
};

export default HomePresenter;