import React from "react";
import styled, { keyframes } from "../../Styles/typed-components";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import InputText from "../../Components/InputText";
import SearchingProgress from "../../Components/SearchingProgress";
import PhotoOthers from "../../Components/PhotoOthers";

const Container = styled.div``;
const Wrapper = styled.div``;
const Info = styled.div``;
const CenterHeader = styled.h1`
    font-size: 30px;
    margin: 0;
    font-weight: 400;
    letter-spacing: 3px;
`;
const RightTmp = styled.div`
    opacity: 0;
`;
const ProductCell = styled.div`
    display: flex;
    flex-flow: row wrap;
    @media(max-width: 800px) {
        justify-content: center;
        & > div {
            margin-right: 0;
        }
    }
`;
const PhotoOtherExtended = styled(PhotoOthers)`
    height: auto;
    margin-right: 10px;
`;
const ResultTitle = styled.h3`
    margin: 20px 0;
    margin-left: 7px;
    padding-left: 6px;
    font-size: 17px;
    font-weight: 400;
    color: #676767;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 56%;
        width: 2px;
        left: -3px;
        background-color: ${props => props.theme.blueColor};
        height: 70%;
        transform: translateY(-50%);
    }
`;
interface IProps {
    searchText: IUseInput
    searchLoading: boolean;
    searchResult: ISearchProductQueryResponse | undefined
};

const SearchPresenter: React.FC<IProps> = ({
    searchText,
    searchLoading,
    searchResult
}) => (
    <Container>
        <NavBar 
            categories={[]}
            centerMenu={<CenterHeader>Search</CenterHeader>}
            leftMenu={
                <Button 
                    value={"Home"}
                    path={"/"}
                />
            }
            rightMenu={
                <RightTmp>  
                    tmp
                </RightTmp>
                // <Button 
                //     value={"Home"}
                //     path={"/"}
                // />
            }
            onClickCategory={() => {}}
        />
        <Wrapper className="row">
            <InputText 
                useInput={searchText} 
                loadingProgress={ searchLoading ? <SearchingProgress /> : ""}
            />
            {
                searchResult && (
                    <Info>
                        <ResultTitle>Result ({searchResult.products.length})</ResultTitle>
                        <ProductCell>
                            {
                                searchResult &&
                                searchResult.products.map(product => 
                                    <PhotoOtherExtended
                                        key={product.id}
                                        imgPath={product.photo.url}
                                        link={`/product/${product.id}`}
                                        onClick={e => {}}
                                        className={"search-photo"}
                                    />
                                )
                            }
                        </ProductCell>
                    </Info>
                )
            }
        </Wrapper>
    </Container>
);

export default SearchPresenter;