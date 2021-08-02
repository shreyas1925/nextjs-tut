import Link from "next/link";
import style from "../styles/Header.module.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className={style.nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
