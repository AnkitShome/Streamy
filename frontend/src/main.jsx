import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContext.jsx';
import { ClerkProvider } from "@clerk/clerk-react";
import { SidebarProvider } from './context/SidebarContext';  // <-- import here

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
   throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
         <AppContextProvider>
            <SidebarProvider>   {/* Wrap here */}
               <App />
            </SidebarProvider>
         </AppContextProvider>
      </BrowserRouter>
   </ClerkProvider>
);
