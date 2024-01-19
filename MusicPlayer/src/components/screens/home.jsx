import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Library from "./library";
import Feed from "./feed";
import Trending from "./trending";
import Player from "./Player";
import Favorite from "./favorite";
import "./home.css";
import Sidebar from "../sidebar/sidebar";
import Login from "./auth/login";
function Home() {
    const[token,setToken]=useState("");
    return (
        <Router>
            <div className="Main-Body">
             <Login/>
            
            {/*<Sidebar/>
                <Routes>
                
                    <Route path="/" element={<Library />} />
                    <Route path="/feed" element={< Feed />} />
                    <Route path="/trending" element={< Trending />} />
                    <Route Path="/player" element={<Player />} />
                    <Route path="/favorite" element={< Favorite />} />
    </Routes>*/}
            </div>
            
        </Router>
    )
}
export default Home