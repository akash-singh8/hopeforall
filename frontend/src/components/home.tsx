import style from "../styles/Home.module.css";
import web1 from "../assets/img1.jpeg";
import web2 from "../assets/img2.jpeg";
import web3 from "../assets/img3.jpg";

const home = () => {
  return (
    <>
      <hr className={style.line} />
      <div className={style.container}>
        <div className={style.info}>
          <h1 className={style.headline}>
            Empowering Underprivileged Communities
          </h1>
          <p className={style.below_tagline}>
            Through transparent and sustainable aid we make a difference.
          </p>
          <div className={style.learn_btn}>
            <a href="/donor">
              <button className={style.start}>Donate Now</button>
            </a>
            <a href="/about">
              <button className={style.more_btn}>Learn More</button>
            </a>
          </div>
          <div className={style.comments}>
            <div className={style.cards1}>
              <div className={style.profile}>
                <img src={web2} alt="profile" className={style.pro} />
                <h3 className={style.john}>John Doe</h3>
              </div>
              <h1 className={style.star}>⭐⭐⭐⭐⭐</h1>
              <p className={style.comment}>
                Hope4All made it possible for me to get much needed medical
                assistance when no one else could help.
              </p>
            </div>
            <div className={style.cards}>
              <div className={style.profile}>
                <img src={web1} alt="profile" className={style.pro} />
                <h3 className={style.john}>John Doe</h3>
              </div>
              <h1 className={style.star}>⭐⭐⭐⭐⭐</h1>
              <p className={style.comment}>
                Donating through Hope4All lets me know exactly where my money is
                going and who it's helping.
              </p>
            </div>
          </div>
        </div>
        <div className={style.crowd_image}>
          <img src={web3} alt="crowd" className={style.crowd} />
        </div>
      </div>
    </>
  );
};

export default home;
