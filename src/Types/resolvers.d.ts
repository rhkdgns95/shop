type T_Products = {
    id: string,
    name: string,
    detail: string,
    onSale: boolean,
    photo: {
        url: string
    },
    price: number,
    createdAt: string
    category: Array<T_Category>
};
type T_Category = {
    id: string;
    name: string;
}
interface IGetProductsResponse {
    AllProducts: Array<T_Products>;
    Products: Array<T_Products>;
}
interface IGetProductsQueryVariables {
    id: string | undefined
};
type T_Categories = {
    id: string;
    name: string;
}

interface IGetCategoriesResponse {
    categories: Array<T_Categories>
}