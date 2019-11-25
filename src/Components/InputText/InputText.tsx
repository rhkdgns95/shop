import React from "react";
import styled from "../../Styles/typed-components";

const Container = styled.div`
    width: 100%;
`;
const Wrapper = styled.div`
    position: relative;
    border-radius: 6px;
    width: 100%;
`;
const Label = styled.label`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 11px;
    font-size: 13px;
    transition: .2s;
    color: #9e9e9e;
    &.active {
        top: 40%;
        transform: translateY(-100%);
        font-size: 9px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px;
    letter-spacing: 1px;
    font-size: 14px;
    color: #6a6a6a;
    border: .5px solid #dfdfdf;
    &:focus,
    &:active {
        outline: none;
    }
    transition: box-shadow .3s;
    &:focus {
        box-shadow: 0 1px 2px rgba(20,50,100,.24), 0 -1px 3px rgba(20,50,100,.32);
    }
    &.active {
        padding-top: 15px;    
        padding-bottom: 5px;
    }
`;

interface IProps {
    useInput: IUseInput    
    loadingProgress?: any;
}

const InputText: React.FC<IProps> = ({
    useInput,
    loadingProgress
}) => (
    <Container>
        <Wrapper>
            <Input id={"input_search"} type={"text"} { ...useInput } className={useInput.value === "" ? "" : "active"} autoComplete="off"/>
            <Label htmlFor={"input_search"} className={useInput.value === "" ? "" : "active"}>Search Title or Description</Label>
            { loadingProgress }
        </Wrapper>
    </Container>
);

export default InputText;