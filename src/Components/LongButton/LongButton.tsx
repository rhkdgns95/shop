import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    width: 100%;
    margin-top: 28px;
    background-color: black;
`;
const Button = styled.button`
    display: block;
    padding: 10px;
    background-color: inherit;
    color: white;
    width: 100%;  
    cursor: pointer;
    border: 0;  
`;

interface IProps {
    onClick: () => any
    value: string;
    className?: string;
}

const LongButton: React.FC<IProps> = ({
    onClick,
    value,
    className
}) => (
    <Container className={className}>
        <Button onClick={onClick}>
            { value }
        </Button>
    </Container>
);

export default LongButton;