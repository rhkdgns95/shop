import React from "react";
import styled from "../../Styles/typed-components";
import { useAppContext } from "../../Routes/App/AppProvider";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(83,209,161,1) 0%, rgba(52,189,183,1) 8%, rgba(157,123,2,1) 54%, rgba(217,14,0,1) 100%);
    &.active {
        width: 100%;
        transition: width .3s ease-in-out;
    }
`;
const Progressbar = () => {
    const { isProgress } = useAppContext();
    return (
        <Container className={isProgress ? "active" : ""}/>
    )
}

export default Progressbar;