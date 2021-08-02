import Link from "next/Link";
import styles from "../styles/Home.module.css";
import Nav from "../component/Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
