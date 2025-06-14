import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
   const [isCollapsed, setIsCollapsed] = useState(false);

   return (
      <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
         {children}
      </SidebarContext.Provider>
   );
};

// Custom hook for easy use
export const useSidebar = () => useContext(SidebarContext);
