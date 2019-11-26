import React from "react";
import styled from "../../Styles/typed-components";
import Header from "../Header";
import NavigationButton from "../NavigationButton";
import { useHomeContext } from "../../Routes/Home/HomeProvider";

const Container =  styled.div`
    
`;
const Box = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    & > div {
        flex: 1;
    }
    @media(max-width: 800px) {
        & > div {
            margin-bottom: 10px;
        }
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
}) => {
    const { categoryId } = useHomeContext();
    return (
        <Container className={"row"}>
            <Box>
                <Header 
                    leftMenu={leftMenu}
                    centerMenu={centerMenu}
                    rightMenu={rightMenu}
                />
                <Wrapper>
                {
                    categories.length > 0 && <NavigationButton className={categoryId === "" ? "active" : ""} id={""} onClick={onClickCategory} value={"ALL"}/>
                }
                {
                    categories.map(item => <NavigationButton className={categoryId === item.id ? "active" : ""}key={item.id} id={item.id} onClick={onClickCategory} value={item.name}/> )
                }
                </Wrapper>
            </Box>
        </Container>
    )
}

export default NavBar;