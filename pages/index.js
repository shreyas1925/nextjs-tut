import Head from "next/head";
import Cards from "../component/Cards";
import styles from "../styles/Index.module.css";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cards data={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
