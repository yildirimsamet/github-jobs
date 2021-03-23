import { useEffect, useState } from "react";
import { useCity } from "../../contexts/CityContext";
import JobCard from "../JobCard";
import styles from "./JobList.module.css";
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const { city, setLoading } = useCity();
  useEffect(() => {
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
    <div className={styles.jobListWrapper}>
      {jobs.length > 1 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            company={job.company}
            companyLogo={job.company_logo}
            title={job.title}
            type={job.type}
            location={job.location}
            time={job.created_at}
            id={job.id}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>Couldn't find any result</p>
      )}
    </div>
  );
};
export default JobList;
