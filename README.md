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

## 4. VSC 
- readme파일 컴파일
: [shift] + [ctrl] + v