import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache: InMemoryCache = new InMemoryCache();
const link: HttpLink = new HttpLink({
    uri: "https://api-euwest.graphcms.com/v1/cjmrqz1hg3g4001b9913bj7lk/master" // Uri 수정 예정.
});

const client = new ApolloClient({
    cache,
    link,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network'
        }
    }
});

export default client;