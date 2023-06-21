import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks,socialLinks } from '../data';

import '../index.css';  
const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <img src={logo} class="nav-logo" alt="backroads" />
        <button type="button" class="nav-toggle" id="nav-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
       <ul class="nav-links" id="nav-links">
        {pageLinks.map((links)=>{
return(<li key={links.id}>
          <a href={links.href} class="nav-link">
           {links.text}</a>
        </li>
);

        })}
        
       </ul>
      <ul class="nav-icons">
       {
        socialLinks.map((slinks)=>{
          const{ id,href,icon }=slinks;
        return( <li key={id}>
          <a href={href} target="_blank" class="nav-icon"
            ><i class={icon}></i
          ></a>
        </li>);
       })}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar