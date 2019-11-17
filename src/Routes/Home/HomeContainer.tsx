import React from "react";
import HomePresenter from "./HomePresenter";
import HomeProvider, { useHomeContext } from "./HomeProvider";

const Home = () => (
    <HomeProvider>
        <HomeContainer />
    </HomeProvider>
)

const HomeContainer: React.FC<any> = ()  => {
    const { productsData } = useHomeContext();
    console.log("PRoductdata: ", productsData );
    
    return (
        <HomeProvider>
            <HomePresenter productsData={productsData}/>
        </HomeProvider>
    )
}

export default Home;