import React from 'react'
import '../index.css'; 
import { pageLinks,socialLinks } from '../data';
function Footer() 
{
  return (
    <footer class="section footer" id="Footer">
      <ul class="footer-links">
      {pageLinks.map((links)=>{
  return(<li key={links.id}>
            <a href={links.href} class="footer-link">
             {links.text}</a>
          </li>
  );
  
          })}
   </ul>
   <ul class="footer-icons">
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
    <p class="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}
export default Footer