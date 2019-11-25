import React from "react";
import styled from "../../Styles/typed-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Routes/App/AppProvider";
import { useApolloClient } from "react-apollo";

const Container = styled.div``;
const Wrapper = styled.div`
    width: 100%;
`;
const Photo = styled.img`
    width: 100%;
    display: block;
`;
interface IProps {
    className: string;
    imgPath: string;
    link: string;
    onClick: (active: boolean) => any
}
const PhotoOthers: React.FC<IProps> = ({
    className,
    imgPath,
    link,
    onClick
}) => {
    const { cache } = useApolloClient();
    return (
        <Container className={className}>
            <Wrapper>
                <Link to={link} onClick={ e => {
                    onClick(true);
                    cache.writeData({
                        data: {
                            similarProducts: {
                                __typename: "SimilarProduct",
                                products: []
                            }
                        }
                    });
                } }>
                    <Photo src={imgPath}/>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default PhotoOthers;