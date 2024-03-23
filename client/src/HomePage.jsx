import React from "react";
import "./HomePage.css";
import user_icon from "./assets/person.png";
import identity_icon from "./assets/identity.png";
import government_icon from "./assets/government.png";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Navbar></Navbar>
        
        <div className="main_container">
          
          <div className="container">
            <div className="first">
              <img src={user_icon} alt="user" className="icon" />
              <div className="yo">
                <div className="fields">
                  <p>Personal Details</p>
                </div>
              </div>
            </div>

            <div className="second">
              <img src={identity_icon} alt="identity" className="icon" />
              <div className="Too">
                <div className="fields">
                  <p>Identity Verification</p>
                </div>
              </div>
            </div>

            <div className="third">
              <img src={government_icon} alt="government" className="icon" />
              <div className="zoo">
                <div className="fields">
                  <p>Government Rules</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container2">
            <div className="fourth">
              <img src={user_icon} alt="user" className="icon" />
              <div className="yo">
                <div className="fields">
                  <p>Loan Application</p>
                </div>
              </div>
            </div>

            <div className="fifth">
              <img src={identity_icon} alt="identity" className="icon" />
              <div className="Too">
                <div className="fields">
                  <p>Land Details</p>
                </div>
              </div>
            </div>

            <div className="six">
              <img src={government_icon} alt="government" className="icon" />
              <div className="zoo">
                <div className="fields">
                  <p>Past Loan Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="site-title">Kshetra Vriddhi</h1>
      </div>

    </>
  );
};

export default HomePage;