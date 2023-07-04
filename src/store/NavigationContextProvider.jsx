import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <NavigationContext.Provider value={{ showMobileNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
