import "../styles/DonorPage.css";
import bloodDonor from "../assets/blood.jpeg";
import donor1 from "../assets/donor1.png";
import donor2 from "../assets/donor2.jpeg";
import donor3 from "../assets/donor3.jpeg";
import donor4 from "../assets/donor4.jpg";
import donor5 from "../assets/donor5.jpeg";
import donor6 from "../assets/donor6.jpeg";
import { useEffect, useState } from "react";

const DonorPgae = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3080/donors");
      setData(await res.json());
    };

    getData();
  }, []);

  return (
    <>
      <div className="donoorpage">
        <div className="donorclass">
          <h1 className="donortitle">Donor Page</h1>

          <div className="donorcards">
            {data.map((item, key) => (
              <div className="card">
                <img
                  src={item.image}
                  alt="Blood Donor"
                  className="bloodimage"
                />
                <div className="descrip">
                  <p className="urgent">{item.description}</p>
                  <div className="profile">
                    <img
                      src={donor1}
                      alt="Blood Donor"
                      className="donorPropfileimg"
                    />
                    <p className="donorname">by {item.name}</p>
                  </div>
                  <div className="raised">
                    <p className="raisedamount">
                      ₹{item.fundRaised} left to raise
                    </p>
                    <div className="linetime"></div>
                    <p className="donorraised">last donation 7 minutes ago</p>
                  </div>

                  <div className="time">
                    <p className="timeleft">16 Days Left</p>
                    <p className="timeleft">93 Supporters</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="card">
              <img src={donor2} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save Sivasanskari's Life!
                </p>
                <div className="profile">
                  <img
                    src={donor1}
                    alt="Blood Donor"
                    className="donorPropfileimg"
                  />
                  <p className="donorname">by Sabyasachi Chatterjee</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹3,22,990 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 7 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">16 Days Left</p>
                  <p className="timeleft">93 Supporters</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={donor3} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save Sivasanskari's Life!
                </p>
                <div className="profile">
                  <img
                    src={donor1}
                    alt="Blood Donor"
                    className="donorPropfileimg"
                  />
                  <p className="donorname">by Sabyasachi Chatterjee</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹3,22,990 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 7 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">16 Days Left</p>
                  <p className="timeleft">93 Supporters</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={donor4} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save Sivasanskari's Life!
                </p>
                <div className="profile">
                  <img
                    src={donor1}
                    alt="Blood Donor"
                    className="donorPropfileimg"
                  />
                  <p className="donorname">by Sabyasachi Chatterjee</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹3,22,990 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 7 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">16 Days Left</p>
                  <p className="timeleft">93 Supporters</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={donor6} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save Sivasanskari's Life!
                </p>
                <div className="profile">
                  <img
                    src={donor1}
                    alt="Blood Donor"
                    className="donorPropfileimg"
                  />
                  <p className="donorname">by Sabyasachi Chatterjee</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹3,22,990 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 7 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">16 Days Left</p>
                  <p className="timeleft">93 Supporters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorPgae;
