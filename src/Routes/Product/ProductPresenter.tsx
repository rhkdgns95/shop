import React from "react";
import styled from "../../Styles/typed-components";
import { useProductProvider } from "./ProductProvider";
import PhotoProduct from "../../Components/PhotoProduct/PhotoProduct";
import InfoProduct from "../../Components/InfoProduct";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { useApolloClient } from "react-apollo";
import { GET_CACHE_SIMILAR_PRODUCTS } from "./ProductQueries";
import ButtonMore from "../../Components/ButtonMore";
import PhotoOthers from "../../Components/PhotoOthers";
import { useAppContext } from "../App/AppProvider";

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
    width: 100%;
    margin: 0 auto;
    flex-flow: row wrap;
    justify-content: space-between;
    & > div {
        // flex: 1;
        width: 49%;
    }
    @media(max-width: 800px) {
        & > div {
            width: 100%;
        }
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
const SimilarProducts = styled.div`
    margin: 20px auto;
    width: 100%;

`;
const SimilarPhotoBox = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    @media(max-width: 800px) {
        justify-content: center;
    }
`;
const PhotoOthersExtended = styled(PhotoOthers)`
    // margin: 12px;
`;
const RelatedHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: spacing-between;
    margin-bottom: 20px;
`;
const RelatedTitle = styled.h3`
    color: #7b7b7b;
    font-weight: 500;
    letter-spacing: 1px;
    margin-right: 10px;
`;
const ButtonMoreExtended = styled(ButtonMore)`

`;

const ProductPresenter = () => {
    const { cache } = useApolloClient();
    const { handleProgress } = useAppContext();

    const cacheProducts: ICacheProducts | null = cache.readQuery({
        query: GET_CACHE_SIMILAR_PRODUCTS
    });
    const { queryProductData, handleSimilarProducts, pagination, loadingSimilarQueryProducts } = useProductProvider();
    const product: T_Products | undefined = queryProductData ? queryProductData.product : undefined;
    const similarProducts: Array<T_Products> | undefined = cacheProducts ? cacheProducts.similarProducts.products : undefined;
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
                    <Box className={"row"}>
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
                        
                        {
                            queryProductData && (
                                <SimilarProducts>
                                    {
                                        similarProducts && similarProducts.length > 0 && 
                                        <RelatedHeader>
                                            <RelatedTitle>
                                                Related Products
                                            </RelatedTitle>
                                            {
                                                pagination !== -1 &&
                                                similarProducts &&  
                                                similarProducts.length > 0 && (
                                                    <ButtonMoreExtended
                                                        className={"btn-more"}
                                                        text={
                                                            <>
                                                                More
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"/></svg>
                                                            </>
                                                        }
                                                        disabled={loadingSimilarQueryProducts}
                                                        onClick={() => {
                                                            // pagination -1인경우: 검색을 다한경우.
                                                            // loadingSimiarQueryProducts가 true인 경우: 아직 검색중인경우.
                                                            if(pagination !== -1 && !loadingSimilarQueryProducts) {
                                                                handleSimilarProducts(queryProductData);
                                                            }
                                                    }}>
                                                    </ButtonMoreExtended>
                                                )
                                            }
                                        </RelatedHeader>
                                    }
                                    <SimilarPhotoBox>
                                        {
                                            similarProducts && 
                                            similarProducts.map(similarProduct => 
                                                <PhotoOthersExtended 
                                                    imgPath={similarProduct.photo.url}
                                                    className={"photo-others"}
                                                    key={similarProduct.id} 
                                                    link={`/product/${similarProduct.id}`}
                                                    onClick={handleProgress}
                                                />
                                            )
                                        }
                                    </SimilarPhotoBox>
                                </SimilarProducts>
                            )
                        }
                        
                    </Box>
                )
            }
        </Container>
    )
}

export default ProductPresenter;