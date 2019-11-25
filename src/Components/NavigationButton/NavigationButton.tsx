import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    margin: 0 5px;
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 3px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background: linear-gradient(90deg, rgba(255,149,11,1) 0%, rgba(195,190,29,1) 100%);
`;
const Button = styled.button`
    border: 0;
    display: block;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
    padding: 10px 15.5px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bgColor};
    color: #c89538;
    border-radius: inherit;
    transition: background-color .2s;
    border: inherit;
    font-style: italic;
    &:active {
        background-color: inherit;
        color: white;
    }
    &.active {
        background-color: inherit;
        color: white;
    }
`;
interface IProps {
    className: string;
    id: string;
    value: string;
    onClick: (id: string) => any;
}
const NavigationButton: React.FC<IProps> = ({
    className,
    id,
    value,
    onClick
}) => (
    <Container>
        <Wrapper>
            <Button className={className} onClick={e => onClick(id)}>{ value }</Button>
        </Wrapper>
    </Container>
);

export default NavigationButton;