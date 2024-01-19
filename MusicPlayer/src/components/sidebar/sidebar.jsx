import React from 'react';
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import {MdFavorite} from "react-icons/md";
import {FaPlay,FaFire } from "react-icons/fa";
// import { FaArrowTrendUp } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src="https://picsum.photos/200/300" className="Logo" alt="Profile"/>
      <div>
      <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
      <SidebarButton title="Library" to="/" icon={<IoLibrarySharp/>}/>
      <SidebarButton title="Trending" to="/trending" icon={<FaFire/>}/>
      <SidebarButton title="Player" to="/Player" icon={<FaPlay/>}/>
      <SidebarButton title="Favorite" to="/favorite" icon={<MdFavorite/>}/>
      </div>
      <SidebarButton title="SignOut" to="" icon={<FaSignOutAlt/>}/>
    </div>
  );
}
