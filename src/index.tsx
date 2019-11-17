import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './Styles/global-styles';
import { ThemeProvider } from './Styles/typed-components';
import { theme } from './Styles/theme';
import { ApolloProvider } from "react-apollo";
import client from './apollo';

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStyles/>
        </ThemeProvider>
    </ApolloProvider>    
    , 
    document.getElementById('root')
);