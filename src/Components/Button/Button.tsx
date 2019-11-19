import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const CustomButton = styled.button`
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    color: #777777;
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #ececec;
    &:focus,
    &:active {
        outline: none;
    }
    &:active {
        color: black;
    }
    
`;

interface IProps {
    value: string;
    path: string;
    className?: string
}
const Button: React.FC<IProps> = ({
    value,
    path,
    className
}) => {
    return (
        <Container className={className}>
            <Link to={path}>
                <CustomButton>{ value }</CustomButton>
            </Link>
        </Container>
    );
};

export default Button;