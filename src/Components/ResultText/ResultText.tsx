import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    position: relative;
`;
const Text = styled.h3`
    margin-left: 7px;
    padding-left: 6px;
    margin: 20px 0;
    margin-left: 7px;
    padding-left: 6px;
    font-size: 17px;
    font-weight: 400;
    color: #676767;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 56%;
        width: 2px;
        left: -3px;
        background-color: ${props => props.theme.blueColor};
        height: 70%;
        transform: translateY(-50%);
    }
`;
interface IProps {
    className?: string;
    text: string;
}
const ResultText: React.FC<IProps> = ({
    className,
    text
}) => (
    <Container className={className}>
        <Text>{ text }</Text>
    </Container>
);

export default ResultText;