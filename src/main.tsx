import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import i18nFit from './i18n';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './store';
import { darkTheme } from 'mui-material-components-tsdx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <ReduxPersistGate loading={null} persistor={persistor}>
                <I18nextProvider i18n={i18nFit}>
                    <ThemeProvider theme={darkTheme}>
                        <App />
                    </ThemeProvider>
                </I18nextProvider>
            </ReduxPersistGate>
        </ReduxProvider>
    </React.StrictMode>,
);
