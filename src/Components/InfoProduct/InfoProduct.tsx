import React from "react";
import styled from "../../Styles/typed-components";
import { useAppContext } from "../../Routes/App/AppProvider";
import LongButton from "../LongButton";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    // width: 90%;
`;
const Name = styled.h5`
    margin: 38px 0 10px 0;
    font-size: 16px;
`;
const Price = styled.p`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
    color: #d39841;
`;
const PriceIcon = styled.span`
    margin-right: 5px;
`;
const Detail = styled.p`
    margin-bottom: 10px;
    font-size: 15px;
`;
const LongButtonExtended = styled(LongButton)`
    background-color: ${props => props.theme.blueColor};
    &:active,
    &:focus {
        outline: 0;
        box-shadow: none;
    }
    &.active {
        background-color: ${props => props.theme.redColor};
    }

`;

interface IProps {
    name: string;
    detail: string;
    price: number;
    id: string;
}
const InfoProduct: React.FC<IProps> = ({
    name,
    detail,
    price,
    id
}) => {
    const { toggleCart, carts } = useAppContext();
    const onCart = carts.find(product => product.id === id);
    return (
        <Container>
            <Wrapper>
                <Name>{ name }</Name>
                <Detail>{ detail }</Detail>
                <Price>
                    <PriceIcon>$</PriceIcon>
                    { price }00
                </Price>
                <LongButtonExtended
                    className={`toggle-cart-button ${onCart ? "active" : ""}`} 
                    onClick={ () => {
                        toggleCart({
                            variables: {
                                id
                            }
                        })
                    }}
                    value={ onCart ? `Remove from cart` : `Add to cart` }
                />
            </Wrapper>
        </Container>
    )
};

export default InfoProduct;