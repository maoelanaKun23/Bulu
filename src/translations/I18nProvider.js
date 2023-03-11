import React from 'react';
import {useSelector} from 'react-redux';
import {IntlProvider} from 'react-intl';

import enMessages from './messages/en';

const allMessages = {
    en:enMessages
}

export default function I18nProvider({children}){
    const locale = useSelector(({i18n}) => i18n.lang);
    const messages = allMessages[locale];
    return (
        <IntlProvider
            locale={locale}
            messages={messages}
        >
            {children}
        </IntlProvider>
    )
}