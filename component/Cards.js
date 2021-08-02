import styles from "../styles/Index.module.css";
import SingleCard from "./SingleCard";

const Cards = ({ data }) => {
  return (
    <>
      <div className={styles.parent}>
        {data.map((carddata) => {
          return <SingleCard carddata={carddata} />;
        })}
      </div>
    </>
  );
};

export default Cards;
