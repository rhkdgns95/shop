import React from "react";
import HomePresenter from "./HomePresenter";
import HomeProvider, { useHomeContext } from "./HomeProvider";
import { RouteComponentProps } from "react-router";

interface IProps extends React.FC<RouteComponentProps> {

}
const Home: IProps = ({
}) => {
    return (
        <HomeProvider>
            <HomeContainer />
        </HomeProvider>
    )
}
const HomeContainer: React.FC<any> = ({
})  => {
    const { productsData } = useHomeContext();
    return <HomePresenter  products={productsData} />
}

export default Home;