import Top from "../../assets/images/Top.gif";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <section className="header__logo">
        <img src={Top} alt="header icon" className="header__icon" />
      </section>
    </header>
  );
};

export default Header;
