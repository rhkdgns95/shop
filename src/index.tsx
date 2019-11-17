import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './Styles/global-styles';
import { ThemeProvider } from './Styles/typed-components';
import { theme } from './Styles/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles/>
    </ThemeProvider>
    , 
    document.getElementById('root')
);