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
interface IUseInput {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
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
interface IGetProductResponse {
    product: T_Products | undefined;
}
interface IGetProductQueryVariables {
    id: string;
}
interface IGetSimilarProductsQueryVariables {
    product_id: string;
    categories_id: Array<string>;
    skip: number;
    first: number;
}
interface IGetSimilarProductsQueryResponse {
    products: Array<T_Products>;
}
interface ICacheProductsSimilarProducts {
    products: Array<T_Products>;
}
interface ICacheProducts {
    similarProducts: ICacheProductsSimilarProducts;
}
interface ISearchProductQueryVariables {
    text: string;
}
interface ISearchProductQueryResponse {
    products: Array<T_Products>
}