import { createContext, useState, useContext } from "react";

const initialValue = { isCollapsed: false };

const SidebarContext = createContext(initialValue);

const useSidebarContext = () => {
  return useContext(SidebarContext);
};

const SidebarProvider = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse(prevState => !prevState);
  };

  const login = () => {
    setLoggedIn(true);
  };

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebarcollapse, isLoggedIn, login }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, useSidebarContext, SidebarProvider };
