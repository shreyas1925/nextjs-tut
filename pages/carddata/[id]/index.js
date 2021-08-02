// import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Link from "next/link";

const carddata = ({ data }) => {
  // One type from which we can get the datas from the url or server
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.child}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <p>This is an card data of particular body content with</p>{" "}
          <button className={styles.button}>
            <Link href="/">Go Back</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default carddata;

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
// or this one

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await res.json();

  const ids = data.map((carddata) => carddata.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
