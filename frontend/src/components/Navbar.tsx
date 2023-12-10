import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.logo}>Hope4All</h1>
      <div className={style.nav_links}>
        <ul className={style.ul}>
          <li className={style.li}>
            <a href="/">About</a>
          </li>
          <li className={style.li}>
            <a href="/about">Services</a>
          </li>
          <li className={style.li}>
            <a href="/donate">Contact</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <a href="/login">
          <button className={style.donate_btn}>Donate Now</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
