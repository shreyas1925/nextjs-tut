import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span> NextJS </span>WebApp
      </h1>
      <p className={headerStyles.description}>
        Lets build starter template of React Framework #Nextjs
      </p>
    </div>
  );
};

export default Header;
