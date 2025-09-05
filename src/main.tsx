import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router';

import './index.css'

import App from './App.tsx'
import Login from './routes/Login.tsx'; 
import Dashboard from './routes/Dashboard.tsx';
import Home from './routes/Home.tsx';
import Profile from './routes/Profile.tsx';
import StorefrontOwnerView from './routes/storefront/Owner_View.tsx';
import StoreFrontConsumerView from './routes/storefront/Consumer_View.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path='/home' Component={Home} />
        <Route path='/profile' Component={Profile} />
        <Route path='/owner-storefront' Component={StorefrontOwnerView} />
        <Route path='/storefront' Component={StoreFrontConsumerView} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
