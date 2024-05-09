import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <a href="/">
        <h1 className={style.logo}>Hope4All</h1>
      </a>
      <div className={style.nav_links}>
        <ul className={style.ul}>
          <li className={style.li}>
            <a href="/about">About</a>
          </li>
          <li className={style.li}>
            <a href="/services">Services</a>
          </li>
          <li className={style.li}>
            <a href="/contact">Contact</a> {/* Scroll to Contact */}
          </li>
        </ul>
      </div>
      <div className="btn">
        <a href="/donor">
          <button className={style.donate_btn}>Donate Now</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
