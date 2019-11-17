import React from "react";
import styled from "../../Styles/typed-components";

interface IProps extends IGetCategoriesResponse {}

const Container =  styled.div`
    
`;
const Wrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px 12.5px;
    &:not(:nth-of-type(1)) {
        margin-left: 10px;
    }
`;
const NavBar: React.FC<IProps> = ({
    categories
}) => (
    <Container>
        <Wrapper>
        {
            categories.map(item => <Button>{item.name}</Button>)
        }
        </Wrapper>
    </Container>
);

export default NavBar;