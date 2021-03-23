import styles from "./JobCard.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { getDiffInDates } from "../../Utils";
import Link from "next/link";
import { useCity } from "../../contexts/CityContext";
const JobCard = ({ company, companyLogo, title, type, location, time, id }) => {
  const { setLoading } = useCity();
  return (
    <Link href={`/${id}`}>
      <div
        onClick={() => {
          setLoading(true);
        }}
        className={styles.jobCardWrapper}
      >
        <img
          onError={(e) => {
            e.target.src = "/images/default.jpg";
          }}
          className={styles.jobCardImg}
          src={companyLogo ? companyLogo : "/images/default.jpg"}
          alt={title}
        />
        <div className={styles.jobCardRight}>
          <p className={styles.jobCardCompany}>{company}</p>
          <h3 className={styles.jobCardName}>{title}</h3>
          <div className={styles.jobCardRightLast}>
            <span className={styles.badge}>{type}</span>
            <div className={styles.jobCardInfoWrapper}>
              <span className={styles.jobCardInfo}>
                <BiWorld className={styles.jobCardInfoIcon} /> {location}
              </span>
              <span className={styles.jobCardInfo}>
                <AiOutlineClockCircle className={styles.jobCardInfoIcon} />{" "}
                {getDiffInDates(time)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default JobCard;
