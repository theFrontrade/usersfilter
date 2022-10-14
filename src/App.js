import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from "./Components/profile";
const App = ({myData}) => {
  return (
    <Router>

     <Routes>
       <Route path='/' exact element={<Home />} />
         <Route path ='/profile/:uuid' element={<Profile myData={myData}/>} />
       {/* <Route path = '/UserInfo' element={UserInfo()} /> */}
     </Routes>
    </Router>
  );
};

export default App;
