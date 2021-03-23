import styles from "../styles/App.module.css";
import Aside from "../components/Aside";
import JobList from "../components/JobList";
import SearchBlock from "../components/SearchBlock";

const App = () => {
  return (
    <div>
      <SearchBlock />
      <div className={styles.homeMainWrapper}>
        <Aside />
        <JobList />
      </div>
    </div>
  );
};
export default App;
