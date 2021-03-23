import { useEffect } from "react";
import SpesificJobAside from "../components/SpesificJobAside";
import SpesificJobContent from "../components/SpesificJobContent";
import { useCity } from "../contexts/CityContext";
import styles from "../styles/SpesificJob.module.css";
const SpesificJob = ({ data, howToApply }) => {
  const { setLoading } = useCity();
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className={styles.spesificJobWrapper}>
      <SpesificJobAside howToApply={howToApply} />
      <SpesificJobContent job={data} />
    </div>
  );
};
export default SpesificJob;
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(process.env.API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: `https://jobs.github.com/positions/${id}.json`,
    }),
  });
  const data = await res.json();
  return {
    props: { data: data.data, howToApply: data.data.how_to_apply },
  };
};
