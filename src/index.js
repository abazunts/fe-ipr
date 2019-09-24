import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-table/react-table.css'
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
        en: {
            common: common_en
        },
        ar: {
            common: common_ar
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next} initialLanguage={'en'}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </I18nextProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
