import styles from "./SpesificJobAside.module.css";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
const SpesificJobAside = ({ howToApply }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backLink}>
        <Link href="/">
          <a>
            <BsArrowLeft /> <span>Back to search</span>
          </a>
        </Link>{" "}
      </div>
      <h3 className={styles.header}>HOW TO APPLY</h3>
      <p className={styles.info}>
        Please email a copy of your resume and online portfolio to
        <span
          className={styles.howtoapply}
          style={{ wordBreak: "break-all" }}
          dangerouslySetInnerHTML={{ __html: howToApply }}
        ></span>
      </p>
    </div>
  );
};
export default SpesificJobAside;
