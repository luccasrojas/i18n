import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, FormattedMessage } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";
import 'bootstrap/dist/css/bootstrap.min.css';

// Determinar el idioma del navegador
const userLanguage = navigator.language || navigator.userLanguage;
console.log(userLanguage)
// Configurar los mensajes en base al idioma
let messages;
switch (userLanguage) {
    case 'en-EN' || 'en':
        messages = require('./locales/en.json');
        break;
    case 'es-ES' || 'es':
        messages = require('./locales/es.json');
        break;
    // Agrega más casos según los idiomas que desees soportar
    default:
        messages = require('./locales/en.json');
        break;
    }

ReactDOM.render(
    <IntlProvider locale={userLanguage} messages={messages}>
            <JobsList lang={userLanguage} />
    </IntlProvider>, document.getElementById("root")
);