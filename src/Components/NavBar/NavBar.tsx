import React from "react";
import styled from "../../Styles/typed-components";
import Header from "../Header";

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
interface IProps extends IGetCategoriesResponse {
    leftMenu: any;
    rightMenu: any;
    centerMenu: any;
    onClickCategory: (id: string) => any;
}
const NavBar: React.FC<IProps> = ({
    categories,
    leftMenu,
    rightMenu,
    centerMenu,
    onClickCategory
}) => (
    <Container>
        <Header 
            leftMenu={leftMenu}
            centerMenu={centerMenu}
            rightMenu={rightMenu}
        />
        <Wrapper>
        {
            categories.length > 0 && <Button onClick={e => onClickCategory("")}>ALL</Button>
        }
        {
            categories.map(item => <Button key={item.id} onClick={e => onClickCategory(item.id)}>{item.name}</Button>)
        }
        </Wrapper>
    </Container>
);

export default NavBar;