import { useEffect, useState } from "react";
import { CityProvider } from "../../contexts/CityContext";
import { JobProvider } from "../../contexts/JobContext";
import { SearchProvider } from "../../contexts/SearchContext";

const Provider = ({ children }) => {
  const [city, setCity] = useState("London");
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (search === "") {
      return;
    }
    setLoading(true);
    fetch(process.env.API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: `https://jobs.github.com/positions.json?description=${search}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      });
  }, [search]);
  useEffect(() => {
    if (city === "") {
      return;
    }
    setLoading(true);
    fetch(process.env.API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: `https://jobs.github.com/positions.json?location=${city}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      });
  }, [city]);
  return (
    <CityProvider value={{ city, setCity, loading, setLoading }}>
      <SearchProvider value={{ search, setSearch }}>
        <JobProvider value={{ jobs, setJobs }}>{children}</JobProvider>
      </SearchProvider>
    </CityProvider>
  );
};
export default Provider;
