import styles from "./SearchBlock.module.css";
import { BsBag } from "react-icons/bs";
import { useSearch } from "../../contexts/SearchContext";
import { useState } from "react";

const SearchBlock = () => {
  const { setSearch } = useSearch();
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={styles.searchBlock}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(searchInput);
        }}
        className={styles.form}
      >
        <BsBag color="var(--grey)" />
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Title, compaines, expertise or benefits"
          className={styles.input}
          type="text"
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBlock;
