import { useState } from "react";
import { CityProvider } from "../../contexts/CityContext";

const Provider = ({ children }) => {
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(true);

  return (
    <CityProvider value={{ city, setCity, loading, setLoading }}>
      {children}
    </CityProvider>
  );
};
export default Provider;
