import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ptBR as examplePtBR } from './locales/example/pt-BR';
import { enUS as exampleEnUS } from './locales/example/en-US';

const i18nFit = i18n.createInstance();

i18nFit.use(initReactI18next).init({
    resources: {
        'en-US': {
            example: exampleEnUS,
        },
        'pt-BR': {
            example: examplePtBR,
        },
    },
    ns: ['example'],
    defaultNS: 'example',
    lng: 'pt-BR',
    interpolation: { escapeValue: false },
});

export default i18nFit;
