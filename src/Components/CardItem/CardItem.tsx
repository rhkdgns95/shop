import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";

const Container = styled.div`

`;
const Wrapper = styled.div`
    transition: .3s;
    text-align: center;
    &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.24), 0 4px 6px rgba(0,0,0,.34);
    }
`;
const PhotoBox = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    background-color: #e8e8e8;
    height: 200px;
    overflow: hidden;
`;
const Photo = styled.img`
    display: block;
    width: 100%;
`;
const Name = styled.p`
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 2px;
    max-width: 300px;
    margin: 3px 0 6px 0;
`;

const Price = styled.p`
    font-size: 15px;
    color: #daa710;
`;
const PriceIcon = styled.span`
    margin-right: 5px;
`;
const Date = styled.span`
    font-size: 14px;
    color: #dfdfdf;
`;
const DetailLink = styled(Link)``;
const Category = styled.p`
    font-size: 12px;
    margin-top: 6px;
    color: #b9b9b9;
`;
interface IProps {
    className: string;
    id: string;
    imgPath: string;
    name: string;
    detail: string;
    price: string;
    createdAt: string;
    category: string;
    onClick: (data: boolean) => {};
}
const CardItem: React.FC<IProps> = ({
    className,
    id,
    imgPath,
    detail,
    price,
    name,
    category,
    createdAt,
    onClick
}) => (
    <Container className={className}>
        <DetailLink to={`/product/${id}`} onClick={ e => onClick(true) }>
            <Wrapper>
                <PhotoBox>
                    <Photo src={imgPath}/>
                </PhotoBox>
                <Category>{ category }</Category>
                <Name>{ name }</Name>
                {/* <Date>{ createdAt }</Date> */}
                <Price>
                    <PriceIcon>$</PriceIcon>
                    { price }00
                </Price>
            </Wrapper>  
        </DetailLink>    
    </Container>
)

export default CardItem;