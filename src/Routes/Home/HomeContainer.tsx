import React from "react";
import HomePresenter from "./HomePresenter";
import HomeProvider, { useHomeContext } from "./HomeProvider";

const Home = () => {
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