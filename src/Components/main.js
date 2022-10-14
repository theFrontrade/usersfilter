import React from "react";
import { Link } from "react-router-dom";

const Main = ({ loading, myErr, myData, input }) => {
  const dataFilter = myData.filter((item) => {
    if (input === "") {
      return item;
    } else if (
      item.name.first.toLowerCase().includes(input.toLowerCase()) ||
      item.name.last.toLowerCase().includes(input.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div className="main-wrap">
      {
        <div className="main-sub-wrap">
          {loading ? (
            <div className="loading-div">
              <img src="/img/loading.gif" alt="img" />
              <p className="loadingtext">Loading ...</p>
            </div>
          )
          : dataFilter.length <= 0 && input.length >=1 ? (
            <div className="loading-div">
              <img src="/img/not-found.png" alt="img" />
              <p className="loadingtext">USER NOT FOUND</p>
            </div>
          ) : (
            dataFilter.splice(0, 16).map((item) => (
              <div className="object-div" key={item.login.uuid}>
                <img src={item.picture.large} alt="img" />
                <div className="profileImg">
                  <div>
                    <span className="home-main-span">
                      {item.name.title} {item.name.first} {item.name.last}
                    </span>
                    <br />
                    <span className="contrast-text">{item.gender}</span>
                  </div>
                  <Link
                    to={`/profile/${item.login.uuid}`}
                    className="see-profile-button"
                  >
                    <button>See Profile Details</button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      }
    </div>
  );
};

export default Main;
