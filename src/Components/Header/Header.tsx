import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 40px 0;
    display: flex;
    justify-content: space-around;
`;
const Menu = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;
const CenterMenu = styled(Menu)`

`;
const LeftMenu = styled(Menu)`

`;
const RightMenu = styled(Menu)`

`;
interface IProps {
    leftMenu: any;
    rightMenu: any;
    centerMenu: any;
}
const Header: React.FC<IProps> = ({
    leftMenu,
    rightMenu,
    centerMenu
}) => (
    <Container>
        <Wrapper>
            <LeftMenu>{ leftMenu }</LeftMenu>
            <CenterMenu>{ centerMenu }</CenterMenu>
            <RightMenu>{ rightMenu }</RightMenu>
        </Wrapper>
    </Container>
);

export default Header;