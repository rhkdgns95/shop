import React from "react";
import styled, { keyframes } from "../../Styles/typed-components";
import LoadingProgressSM from "../LoadingProgressSM";

const Container = styled.div`

`;
const Button = styled.button`
    position: relative;
    display: block;
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 10px;
    font-size: 13px;
    padding-right: 45px;
    padding-left: 20px;
    width: 125px;
    height: 37px;
    text-align: left;
    &:disabled {
        border: 1px solid #e7e7e7;
    }
    &:not(:disabled) {
        cursor: pointer;
    }
    &:active,
    &:focus {
        outline: none;
    }
    & > svg {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        transition: .3s;
    }
    &:hover {
        & > svg {
            right: 10px;
        }
    }
`;

interface IProps {
    className: string;
    disabled: boolean;
    text: any;
    onClick: any;
}
const ButtonMore: React.FC<IProps> = ({
    className,
    text,
    disabled,
    onClick
}) => {
    return (
        <Container className={className}>
            <Button 
                disabled={disabled} 
                onClick={onClick}
            >
            {
                disabled ? (
                    <LoadingProgressSM />
                ) : <> { text } </>
            }
            </Button>
            
        </Container>
    );
};

export default ButtonMore;