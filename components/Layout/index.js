import Navbar from "../Navbar";
import styles from "./Layout.module.css";
import Head from "next/head";
import { useCity } from "../../contexts/CityContext";
import Loader from "../Loading";
const Layout = ({ children }) => {
  const { loading } = useCity();
  return (
    <div>
      {loading && <Loader />}
      <div
        style={
          loading
            ? { filter: "blur(2px)", maxHeight: "100vh", overflow: "hidden" }
            : {}
        }
        className={styles.container}
      >
        <Head>
          <title>Github jobs</title>
        </Head>

        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
