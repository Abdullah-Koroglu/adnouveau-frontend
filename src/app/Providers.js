'use client';
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'next-themes';

const BreadcrumbContext = createContext();

export function Providers({ children }) {
    const [endBreadcrumb, setEndBreadcrumbs] = useState({});
    
    
    return (
      <BreadcrumbContext.Provider value={{ endBreadcrumb, setEndBreadcrumbs }}>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
      </BreadcrumbContext.Provider>
    );
}


export const useBreadcrumb = () => useContext(BreadcrumbContext);
