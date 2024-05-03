import style from "../styles/Navbar.module.css";

const Navbar = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={style.nav}>
      <h1 className={style.logo}>Hope4All</h1>
      <div className={style.nav_links}>
        <ul className={style.ul}>
          <li className={style.li}>
            <a href="/about">About</a>
          </li>
          <li className={style.li}>
            <a href="/services">Services</a>
          </li>
          <li className={style.li}>
            <a href="/contact" onClick={scrollToContact}>
              Contact
            </a>{" "}
            {/* Scroll to Contact */}
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
