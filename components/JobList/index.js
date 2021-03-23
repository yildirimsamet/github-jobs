import { useJob } from "../../contexts/JobContext";
import JobCard from "../JobCard";
import styles from "./JobList.module.css";
const JobList = () => {
  const { jobs } = useJob();
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
