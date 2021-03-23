import styles from "./SpesificJobContent.module.css";
import { BiWorld } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { getDiffInDates } from "../../Utils";
const SpesificJobContent = ({ job }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        {job.title}
        <span className={styles.badge}>{job.type}</span>
      </h1>
      <span className={styles.iconWrapper}>
        <AiOutlineClockCircle className={styles.icon} />{" "}
        {getDiffInDates(job.created_at)}
      </span>
      <div className={styles.companyHeader}>
        <img
          className={styles.companyHeaderImg}
          src={job.company_logo}
          alt="company logo"
        />
        <div className={styles.companyHeaderRight}>
          <h2 className={styles.companyHeaderTitle}>{job.company}</h2>
          <span className={styles.iconWrapper}>
            <BiWorld className={styles.icon} /> {job.location}
          </span>
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: job.description }}
      ></div>
    </div>
  );
};
export default SpesificJobContent;
