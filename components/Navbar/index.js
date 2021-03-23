import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navBrand}>
          <strong>Github</strong> jobs
        </a>
      </Link>
    </nav>
  );
};
export default Navbar;
