import style from "../styles/footer.module.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.cont}>
          <h1 className={style.logo_name}>Hope4All</h1>
          <p className={style.taglining}>© Hope4All, 2023</p>
        </div>
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
        <div className={style.social_icons}>
          <img src={facebook} alt="facebook" className={style.icon} />
          <img src={instagram} alt="linkedin" className={style.icon} />
          <img src={linkedin} alt="instagram" className={style.icon} />
        </div>
      </div>
    </>
  );
};

export default footer;
