import React from "react";
import Header from "./header";
import { useState, useEffect } from "react";
import results from "./mydata.json";
import { useParams } from "react-router-dom";
import Footer from './Footer'
const Profile = () => {
  const [myData, setMyData] = useState([]);
  const { uuid } = useParams();
  useEffect(() => {
    setMyData(results.results);
  }, []);
 console.log(myData)

  return (
    <div>
      <Header />
      <div className="main-wrap">
        {myData
          .filter((item) => {
            if (item.login.uuid === uuid) {
              return item;
            }
          })
          .map((item) => (
            <div key={item.login.uuid} className="profile-div">
              <div className="profile-img-div">
                <img src={item.picture.large} alt="sam" className="cover-img" />
              </div>
              <div className="profile-main-wrap">
                <div className="profilename-wrap">
                  <img src={item.picture.large} alt="img" className="profile-pic" /><br />
                  <span>
                      {item.name.title} {item.name.first} {item.name.last}
                    </span>
                </div>
                <div className="other-details-wrap">
                  <h2>MY PROFILE</h2>
                  <div className="other-details-subwrap">
                    <p>Basic Info</p>
                    <span>Username <span>{item.login.username}</span></span><br/>
                    <span>Nationalty  <span>{item.nat}</span></span><br/>
                    <span>Age  <span>{item.dob.age}</span></span><br/>
                    <span>Date of Birth <span>{item.dob.date}</span></span><br/>
                  </div>
                  <div className="other-details-subwrap">
                    <p>Placed Lived</p>
                    <span><span>{item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.country}.</span></span>
                  </div>
                  <div className="other-details-subwrap">
                    <p>Contact info </p>
                    <span>E-mail<span>{item.email}</span></span><br/>
                    <span>Phone No<span>{item.phone}</span></span><br/>
                    <span>Cell  <span>{item.cell}</span></span><br/>
                    
                  </div>
                  <div className="other-details-subwrap">
                    <p>Registration Details</p>
                    <span>Date Registered<span>{item.registered.date}</span></span><br />
                    <span>Registration Age <span>{item.registered.age}</span></span>
                  </div>
                  <div className="other-details-subwrap">
                    <p>Other Details</p>
                    <span>latitude<span>{item.location.coordinates.latitude}</span></span><br />
                    <span>longitude<span>{item.location.coordinates.longitude}</span></span><br />
                    <span>Timezone <span>{item.location.timezone.offset} {item.location.timezone.description}</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
