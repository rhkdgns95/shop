import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    width: 90%;
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
const CartButton = styled.button`
    display: block;
    margin-top: 28px;
    padding: 10px;
    background-color: black;
    color: white;
`;

interface IProps {
    name: string;
    detail: string;
    price: number;

}
const InfoProduct: React.FC<IProps> = ({
    name,
    detail,
    price
}) => {

    return (
        <Container>
            <Wrapper>
                <Name>{ name }</Name>
                <Detail>{ detail }</Detail>
                <Price>
                    <PriceIcon>$</PriceIcon>
                    { price }00
                </Price>
                <CartButton>Add To Cart</CartButton>
            </Wrapper>
        </Container>
    )
};

export default InfoProduct;