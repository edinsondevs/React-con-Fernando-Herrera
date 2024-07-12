import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalendarApp } from './CalendarApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';


import { PrimeReactProvider } from 'primereact/api';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider >
      <BrowserRouter>
        <CalendarApp />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>,
)
