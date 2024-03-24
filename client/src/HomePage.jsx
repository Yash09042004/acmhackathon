import React from "react";
import "./HomePage.css";
import "./HomePageAnimations.css";
import user_icon from "./assets/person.png";
import identity_icon from "./assets/identity.png";
import government_icon from "./assets/government.png";
import Navbar from "./Navbar";

const HomePage = ({ handleFileUpload }) => {
  return (
    <>
    
        <Navbar></Navbar>
        <div className="main_container">
        <div className="container">
          <h2>Card 1</h2>
         
          <div className="first">
                <img src={user_icon} alt="user" className="icon" />
                <div className="yo">
                  <div className="fields">
                    <p>Personal Details</p>
                    <input type="file" onChange={(event) => handleFileUpload(event, 'personal')} />
                  </div>
                </div>
              </div>

              <div className="second">
                <img src={identity_icon} alt="identity" className="icon" />
                <div className="Too">
                  <div className="fields">
                    <p>Identity Verification</p>
                    <input type="file" onChange={(event) => handleFileUpload(event, 'identity')} />
                  </div>
                </div>
              </div>

              <div className="third">
                <img src={government_icon} alt="government" className="icon" />
                <div className="zoo">
                  <div className="fields">
                    <p>Government Rules</p>
                    {/* <Link to="/rules">
                   <button className="rules_button">View Rules</button>
                   </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="container2">
          <h2>Card 2</h2>
          <div className="four">
                <img src={user_icon} alt="user" className="icon" />
                <div className="yo">
                  <div className="fields">
                    <p>Land Details</p>
                    <input type="file" onChange={(event) => handleFileUpload(event, 'land')} />
                  </div>
                </div>
              </div>

              <div className="fifth">
                <img src={identity_icon} alt="identity" className="icon" />
                <div className="Too">
                  <div className="fields">
                    <p>Past Loan Details</p>
                    <input type="file" onChange={(event) => handleFileUpload(event, 'loan')} />
                  </div>
                </div>
              </div>

              <div className="sixth">
                <img src={government_icon} alt="government" className="icon" />
                <div className="zoo">
                  <div className="fields">
                    <p>Sixth Field</p>
                    <input type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
 

  );
};

export default HomePage;