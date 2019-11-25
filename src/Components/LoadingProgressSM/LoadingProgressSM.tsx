import React from "react";
import styled, { keyframes } from "../../Styles/typed-components";

const Container = styled.div`

`;
const Loading = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(0deg, rgba(157,157,157,1) 0%, rgba(251,238,255,1) 51%, rgba(230,191,201,1) 100%);
    border-radius: 50%;
    animation: ${keyframes => Rotate} 1s linear infinite;
`;

const LoaddingWrapper = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 1px 2px rgba(0,250,0,.24), 0 -1px 2px rgba(250,0,0,0.34);
    &::after,
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        border-radius: 50%;
    }
    &::before {
        left: 100%;
    }
`;

const Rotate = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;
const LoadingProgressSM = () => (
    <Container>
        <Loading>
            <LoaddingWrapper />
        </Loading>
    </Container>
);

export default LoadingProgressSM;