import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl'

import en from './i18n/en.js';
import zh from './i18n/zh.js';

const Root = () => {
    const [locale, setLocale] = useState(navigator.language);
    const [themeType, setThemeType] = useState("light");

    let messages;

// 根據使用者選擇的語系 locale 切換使用不同的 messages
    if (locale.includes('zh')) {
        messages = zh;
    } else {
        messages = en;
    }

    return (
        <IntlProvider locale={locale}
                      key={locale}
                      defaultLocale="en"
                      messages={messages}
        >
            <div id="theme" className={`theme__${themeType}`}>
                <App setLocale={setLocale} lang={locale} setThemeType={setThemeType} themeType={themeType}/>
            </div>
        </IntlProvider>

    );
};

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
