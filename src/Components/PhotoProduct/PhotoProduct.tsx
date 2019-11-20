import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`

`;
const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
`;
const Photo = styled.img`
    width: 100%;
    display: block;
`;
interface IProps {
    productCategory: any;
    imgPath: string;
}

const PhotoProduct: React.FC<IProps> = ({
    productCategory,
    imgPath
}) => {
    return (
        <Container>
            
            <Wrapper>
                <>
                    { productCategory }
                </>
                <Photo src={imgPath}/>
            </Wrapper>
        </Container>
    )
};

export default PhotoProduct;