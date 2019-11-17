type T_Products = {
    id: string,
    name: string,
    detail: string,
    onSale: boolean,
    photo: {
        url: string
    },
    price: string
};

interface IGetProductsResponse {
    AllProducts: Array<T_Products>
}

type T_Categories = {
    id: string;
    name: string;
}

interface IGetCategoriesResponse {
    categories: Array<T_Categories>
}