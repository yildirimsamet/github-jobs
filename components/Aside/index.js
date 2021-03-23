import styles from "./Aside.module.css";
import { BiWorld } from "react-icons/bi";
import { useCity } from "../../contexts/CityContext";
import { cityStateTextHandler } from "../../Utils/";
import { useState } from "react";
const Aside = () => {
  const { city, setCity } = useCity();
  const [input, setInput] = useState("");
  return (
    <div className={styles.asideWrapper}>
      <div className={styles.radioWrapper}>
        <input id="fullTime" type="checkbox" />
        <label className={styles.asideText} htmlFor="fullTime">
          Full time
        </label>
      </div>
      <h3 className={styles.header}>LOCATION</h3>
      <div className={styles.inputWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setCity(cityStateTextHandler(input));
          }}
        >
          <BiWorld color="var(--grey)" />
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className={styles.input}
            placeholder="City, state, zipcode or country"
            type="text"
          />
        </form>
      </div>
      <div>
        <div className={styles.radioWrapper}>
          <input
            onChange={(e) => {
              setCity("London");
              e.target.checked = true;
            }}
            id="London"
            type="radio"
            name="city"
            checked={city === "London" || city === "london" ? true : false}
          />
          <label className={styles.asideText} htmlFor="London">
            London
          </label>
        </div>
        <div className={styles.radioWrapper}>
          <input
            onChange={(e) => {
              setCity("Amsterdam");
              e.target.checked = true;
            }}
            id="Amsterdam"
            type="radio"
            name="city"
            checked={
              city === "Amsterdam" || city === "amsterdam" ? true : false
            }
          />
          <label className={styles.asideText} htmlFor="Amsterdam">
            Amsterdam
          </label>
        </div>
        <div className={styles.radioWrapper}>
          <input
            onChange={(e) => {
              setCity("New+York");
              e.target.checked = true;
            }}
            id="NewYork"
            type="radio"
            name="city"
            checked={city === "New+York" || city === "new+york" ? true : false}
          />
          <label className={styles.asideText} htmlFor="NewYork">
            New York
          </label>
        </div>
        <div className={styles.radioWrapper}>
          <input
            onChange={(e) => {
              setCity("Berlin");
              e.target.checked = true;
            }}
            id="Berlin"
            type="radio"
            name="city"
            checked={city === "Berlin" || city === "berlin" ? true : false}
          />
          <label className={styles.asideText} htmlFor="Berlin">
            Berlin
          </label>
        </div>
      </div>
    </div>
  );
};
export default Aside;
