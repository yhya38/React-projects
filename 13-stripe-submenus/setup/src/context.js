import React, { useState, useContext } from "react";
import sublinks from "./data";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage]=useState({page:'', links:[]})

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    const openSubmenu = (text, coordinates) => {
      const page=sublinks.find((link)=>link.page==text)
      setPage(page)
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <Appcontext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
              location,
        page
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { AppProvider };
