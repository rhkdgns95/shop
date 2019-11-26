type T_Product = {
    id: string,
    name: string,
    detail: string,
    onSale: boolean,
    photo: {
        url: string
    },
    price: number,
    createdAt: string,
    category: Array<T_Category>,
    onCart: boolean
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
    AllProducts: Array<T_Product>;
    Products: Array<T_Product>;
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
    product: T_Product | undefined;
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
    products: Array<T_Product>;
}
interface ICacheProductsSimilarProducts {
    products: Array<T_Product>;
}
interface ICacheProducts {
    similarProducts: ICacheProductsSimilarProducts;
}
interface ISearchProductQueryVariables {
    text: string;
}
interface ISearchProductQueryResponse {
    products: Array<T_Product>
}
interface IToggleCartMutationVariables {
    id: string
}
interface IGetCartsQueryResponse {
    cart: Array<T_Product>;
}