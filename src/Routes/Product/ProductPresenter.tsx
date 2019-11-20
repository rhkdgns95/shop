import React from "react";
import styled from "../../Styles/typed-components";
import { useProductProvider } from "./ProductProvider";
import PhotoProduct from "../../Components/PhotoProduct/PhotoProduct";
import InfoProduct from "../../Components/InfoProduct";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`

`;
const Box = styled.div`

`;
const CenterLink = styled(Link)`
    font-size: 30px;
    letter-spacing: 6px;
`;
const Wrapper = styled.div`
    display: flex;
    & > div {
        flex: 1;
    }
    max-width: 1100px;
    margin: 0 auto;
    @media(max-width: 800px) {
        flex-flow: column;
    }
`;
const DetailHeader = styled.div`
    padding: 10px 0;
`;
const HeaderTitle = styled.span`
    padding: 3px;
    color: #a29d9d;
    font-size: 13px;
    &.strong {
        color: black;
    }
`;

const ProductPresenter = () => {
    const { queryProductData } = useProductProvider();
    const product: T_Products | undefined = queryProductData ? queryProductData.product : undefined;
    console.log("queryProductData: ", queryProductData);
    return (
        <Container>
            <NavBar 
                categories={[]}
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
                onClickCategory={e => {}}
            />
            {
                product && (
                    <Box>
                        <Wrapper>
                            <PhotoProduct 
                                productCategory={
                                    <DetailHeader>
                                        <HeaderTitle>{ product.category.map(category => category.name) }</HeaderTitle>
                                        <HeaderTitle> > </HeaderTitle>
                                        <HeaderTitle className={"strong"}>{ product.name }</HeaderTitle>
                                    </DetailHeader>
                                }
                                imgPath={product.photo.url}
                            />
                            <InfoProduct 
                                name={product.name}
                                detail={product.detail}
                                price={product.price}
                            />
                        </Wrapper>
                    </Box>
                )
            }
            
        </Container>
    )
}

export default ProductPresenter;