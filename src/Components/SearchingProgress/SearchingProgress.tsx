import React from "react";
import styled, { keyframes } from "../../Styles/typed-components";

const Container = styled.div`
    overflow: hidden;
`;
const Searching = styled.div`
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: linear-gradient(90deg, rgba(44,139,170,1) 0%, rgba(28,200,192,1) 100%);
    border-radius: 50%;
    animation: ${keyframes => Rotate} 2s linear infinite;
`;
const Progress = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 50%;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        padding: 5px;
        border-radius: 50%;
        transform: inherit;
        background-color: white;
    }
    &::after {
        left: 100%;
    }
`;
const Rotate = keyframes`
    0% {
        transform: translateY(-50%) rotate(0deg);
    }
    100% {
        transform: translateY(-50%) rotate(360deg);
    }
`;
const SearchingProgress = () => (
    <Container>
        <Searching>
            <Progress />
        </Searching>
    </Container>
);

export default SearchingProgress;