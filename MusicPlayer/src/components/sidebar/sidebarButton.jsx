import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import "./sidebarButton.css";

export default function SidebarButton(props) {
  const location=useLocation();
  const isActive=location.pathname===props.to;
  const btn=isActive ? " SidebarButton active":"SidebarButton";
  return (
    <Link to={props.to} >
      <div className={btn}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
        </IconContext.Provider>
        <p className='title'>{props.title}</p>
      </div>
    </Link>
  );
}
