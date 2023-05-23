import { createContext, useState, useContext } from "react";

const initialValue = { isCollapsed: false };

const SidebarContext = createContext(initialValue);

const useSidebarContext = () => {
  return useContext(SidebarContext);
};

const SidebarProvider = ({ children }) => {
  const [isCollapsed, setCollapse] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const user = {
    username: "onta",
    password: "onta",
  };

  const toggleSidebarcollapse = () => {
    setCollapse(prevState => !prevState);
  };

  const login = () => {
    setLoggedIn(true);
  };

  // useEffect(() => {
  //   // Check if user is logged in from localStorage
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (isLoggedIn) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }, []);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebarcollapse, user, isLoggedIn, login }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, useSidebarContext, SidebarProvider };
