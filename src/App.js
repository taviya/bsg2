import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from "./components/Home";
import Header from "./components/Header";
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import MyDeposits from './components/MyDeposits';
import SidebarMenu from './components/SidebarMenu';
import MyTeam from './components/MyTeam';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div class="container-fluid">
          <div class="row">
            <SidebarMenu/>
              <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/myteam" element={<MyTeam />} />
                <Route exact path="/mydeposits" element={<MyDeposits />} />
              </Routes>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
