import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import * as Sentry from "@sentry/react";
//import { BrowserTracing } from "@sentry/tracing";
import './index.css';
import App from './App';

/*
Sentry.init({
  dsn: "https://99c0ac35680d40a6b01a461803ac078c@o1140324.ingest.sentry.io/6198203",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
*/

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
