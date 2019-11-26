import React from 'react';
import styled from '../../Styles/typed-components';
import NavBar from '../../Components/NavBar';
import Button from '../../Components/Button';
import PhotoOthers from '../../Components/PhotoOthers';
import { useAppContext } from '../App/AppProvider';
import ResultText from '../../Components/ResultText';
import LongButton from '../../Components/LongButton';

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: block;
    padding-bottom: 50px;
`;
const CenterTitle = styled.h3`
    font-size: 30px;
    letter-spacing: 6px;
    font-weight: 400;
    margin: 0;
`;
const Tmp = styled.div`
    opacity: 0;
    padding: 5px 12.5px;
`;
const ResultTextExtended = styled(ResultText)``;
const LongButtonExtended = styled(LongButton)`
    max-width: 300px;
    @media(max-width: 800px) {
        max-width: 100%;
    }
`;
const CartCell = styled.div`
    display: flex;
    flex-flow: row wrap;
`;
const CartPresenter = () => {
    const { handleProgress, carts } = useAppContext();
    return (
        <Container>
            <NavBar 
                categories={[]}
                centerMenu={
                    <CenterTitle>Cart</CenterTitle>
                }
                leftMenu={
                    <Button
                        value={"Home"}
                        path={"/"}                    
                    />
                }
                rightMenu={
                    <Tmp>
                        tmp
                    </Tmp>
                }
                onClickCategory={() => {}}
            />
            <Wrapper className={"row"}>
                <ResultTextExtended 
                    className={"result-text"} 
                    text={`Products (${carts.length})`}
                />
                <CartCell>
                {
                    carts.map(product => 
                        <PhotoOthers 
                            key={product.id}
                            className={'photo'}
                            imgPath={product.photo.url}
                            link={`/product/${product.id}`}
                            onClick={handleProgress}
                        />
                    )
                }
                </CartCell>
                <LongButtonExtended 
                    onClick={() => {}}
                    value={`Pay ($33.333)`}
                    className={"pay-button"}
                />
            </Wrapper>
        </Container>    
    )
}

export default CartPresenter;