import { createContext, useContext } from "react";
const CityContext = createContext();
export const CityProvider = CityContext.Provider;
export const useCity = () => useContext(CityContext);
