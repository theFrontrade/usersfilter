import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import results from "./Components/mydata.json";
import Footer from  "./Components/Footer"
const Home = () => {
  const [myData, setMyData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (myData.length === 0) {
        setMyData(results.results);
      }
      setLoading(false);
    }, 2000);
  }, []);
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setInput(input);
  };
  //  if (!navigator.onLine){
  //    alert("Please Reload Or Check Your Network Connection")
  //  }
  return (
    <div>
      <div>
        <Header handleSearch={handleSearch} handleClick={handleClick} />
        <Main loading={loading} input={input} myData={myData} />
        <Footer />
        </div>
    </div>
  );
};
export default Home;
