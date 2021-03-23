import styles from "./SearchBlock.module.css";
import { BsBag } from "react-icons/bs";

const SearchBlock = () => {
  return (
    <div className={styles.searchBlock}>
      <form className={styles.form}>
        <BsBag color="var(--grey)" />
        <input
          placeholder="Title, compaines, expertise or benefits"
          className={styles.input}
          type="text"
        />
        <button className={styles.button}>Search</button>
      </form>
    </div>
  );
};
export default SearchBlock;
