import styles from "../styles/Index.module.css";
import Link from "next/link";

const SingleCard = ({ carddata }) => {
  return (
    <>
      <Link href="/carddata/[id]" as={`/carddata/${carddata.id}`}>
        <div className={styles.child}>
          <h3>{carddata.title}</h3>
          <p>{carddata.body}</p>
        </div>
      </Link>
    </>
  );
};
export default SingleCard;
