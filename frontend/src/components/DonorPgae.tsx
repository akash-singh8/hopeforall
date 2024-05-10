import "../styles/DonorPage.css";
import bloodDonor from "../assets/blood.jpeg";
import donor2 from "../assets/donor2.jpeg";
import donor4 from "../assets/donor3.jpeg";
// import donor4 from "../assets/donor4.jpg";
// import donor4 from "../assets/donor5.jpeg";
import donor3 from "../assets/donor6.jpeg";

const DonorPage = () => {
  return (
    <>
      <div className="donorpage">
        <div className="donorclass">
          <h1 className="donortitle">Donor Page</h1>
          <div className="donorcards">
            <div className="card">
              <img src={donor2} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save John's Life!
                </p>
                <div className="profile">
                  <p className="donorname">by Emily Johnson</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹5,00,000 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 15 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">10 Days Left</p>
                  <p className="timeleft">120 Supporters</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={bloodDonor} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save Mary's Life!
                </p>
                <div className="profile">
                  <p className="donorname">by Michael Smith</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹3,75,000 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 20 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">7 Days Left</p>
                  <p className="timeleft">80 Supporters</p>
                </div>
              </div>
            </div>
            <div className="card">
                <img src={donor3} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save David's Life!
                </p>
                <div className="profile">
                  <p className="donorname">by Sarah Brown</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹2,10,000 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 30 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">5 Days Left</p>
                  <p className="timeleft">60 Supporters</p>
                </div>
              </div>
            </div>
            <div className="card">
                <img src={donor4} alt="Blood Donor" className="bloodimage" />
              <div className="descrip">
                <p className="urgent">
                  Urgent Medical Fundraiser: Help Save Emma's Life!
                </p>
                <div className="profile">
                  <p className="donorname">by James Wilson</p>
                </div>
                <div className="raised">
                  <p className="raisedamount">₹1,50,000 raised</p>
                  <div className="linetime"></div>
                  <p className="donorraised">last donation 40 minutes ago</p>
                </div>

                <div className="time">
                  <p className="timeleft">3 Days Left</p>
                  <p className="timeleft">40 Supporters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorPage;