# SlimeShopping

## 1. Todo
- [x] Create react-app to typescript
- [x] Add Theme Styles
- [x] Add ApolloProvider
- [x] Add React Router, Add navigatonbar
- [x] Add Navigation(Selected Button), Add Card PhotoImage
- [x] Products Detail Pages
- [x] ProductContainer - Pagination Similarly Products, AppProvider - Add Progressbar.
- [x] NavBar - Navigation Button, Add row class.
- [x] SearchContainer - Search Product Title and Description.   
- [x] PWA - Simple Settings.
- [x] CartContainer(writeFragment) - [Bug - onCart not working]


## 2. Install
- 2.1) yarn create react-app . --typescript
- 2.2) yarn add styled-components @types/styled-components
- 2.3) yarn add react-apollo apollo-boost
- 2.4) yarn add graphql @apollo/react-hooks
- 2.5) yarn add apollo-client apollo-cache-inmemory apollo-link-http
- 2.6) yarn add react-router-dom @types/react-router-dom

## 3. Learn
- 3.1) Graphql pagination
> https://graphql.org/learn/pagination/
- 3.2) graphql - Pagination(keyword: [skip, first])
: skip은 시작위치이다. index값 x, 1부터 시작 o
: first는 갯수이다. (검색할 갯수이다.)
: id값은 2개라면 IN 혹은 OR연산자를 이용하면 된다.
: ex) Index를 2개포함하는 값 + 2개씩검색하려면 다음처럼 쿼리요청을 할것이다. 
: $id는 [ID!] 타입이다. skip과 first는 INT 타입이다.
: 1번째 요청 (where: { id_in: $id }, skip: 0, first: 2)
: 2번째 요청 (where: { id_in: $id }, skip: 2, first: 2)
: 3번째 요청 (where: { id_in: $id }, skip: 4, first: 2)
- 3.3) Where조건절에 AND연산자
: where: { id_in: $id }, { id_not: $product_id } // id값을 추가제외할수있다.
- 3.4) Directives - @if, @include
: 참고: https://graphql.org/learn/queries/
: if와 include keyword로 boolean타입에 대해서 @include(id: $isActive); graphql로 조건문을 추가시킬 수 있다.
: @include(if: Boolean) Only include this field in the result if the argument is true.
: @skip(if: Boolean) Skip this field if the argument is true.-
- 3.5) readFragment
: 사용법: cache.readFragment({ fragment: FRAGMENT_PRODUCT, id: CACHE_ID });
: readFragment로 캐시에 데이터르 가져온다. 
: id는 캐시에 저장된 ID이며, Product:sjmflgfl.. 와 같이 되어있다.
: 캐시에는 graphql로 요청한 데이터에 대한 자료들이 전부저장되어있다.
: 자세히 모름!! 왜냐? 이것은 GraphqlCMS의 특징인지 아니면, Graphql 요청에대해서 항상 캐시에 저장되는지는 의문이다....
: 그래서 우리는 우선 GraphqlCMS의 특징으로 알고 Cache에는 상품정보가 저장되어있으니, 캐시에 저장된 상품의 ID와 fragment가 필요하다.
: fragment는 FRAGMENT_PRODUCT에 정의해놓았으며, cache의 id값은 어떻게가져오느냐?
: 1) toggleProduct: (_, args, { cache, getCacheKey });
: 2) args로 상품의 id값을 받아온다.
: 3) const cacheId = getCacheKey({ __typename: "Product", id: args.id }); 
: 4) cacheId는 Product:cvfogfgkg... 와같이 저장된다.
: 또한 fragment는 이미 정의되어있으므로 fragment로 가져오기위해 fragment는 다음처럼 설정한다.
: const fragment = gql`${FRAGMENT_PRODUCT}`;로 가져온다.
: readFragment는 cache데이터를 읽어오되, cache에저장된 id값과 스키마(fragment)를 요구함.
: writeFragment, readFragment 캐시데이터를 read/write할때 사용하기 유용하다.
: ex) 회원정보 수정시 보안을 위해 비밀번호 확인을요구할때 default로 cache에 passwordChecked: false로 저장시킨다. 확인이된다면 passwordChecked: true로 변경시킨다음, 새로고침이나 다른페이지를 갔다온경우 다시 passwordChecked: true로 저장시키면 됨. - 매우 유용함!!
- 3.6) graphql 타입에 cache데이터 추가하기.
: 기본 apollo.ts에 다음과같이 정의한다.
: new ApolloClient({
    resolvers: {
        Query: {},
        Mutation: {},
        Product: { // __typename의 명칭을 적어준다. ex) __typename: "Product"
            onCart: () => false;    // 서버에 존재하지 않는 onCart라는 속성을 추가해준다.
        }
    }
});
: 여기서 끝난게아니다. 
: 아마 위에제를 보면, Product라는 쿼리내용을 불러올때 다음을 추가해야한다.
{ 
    products {
        ...ProductItems, 
        onCart @client 
    }
}
: 서버의 데이터의 스키마에 로컬에서 사용될 새로운 스키마를 추가할 수 있다.
: 주의점으로는 로컬에서 추가한 속성이라 reload혹은 refresh하면 사라진다.
: GraphqCMS를 사용할때 정말 좋은 방식이다.


## 4. VSC 
- readme파일 컴파일
: [shift] + [ctrl] + v
- 해당파일에서 전체 단어찾기
: [ctrl] + F2
