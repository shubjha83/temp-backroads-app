import React from 'react'
import about from '../images/about.jpeg'
import '../index.css';  
import Title from './Title';

function Aboutus() {
  return (
    <section class="section" id="about">
   <Title title='About' subTitle='us'></Title>
    <div class="section-center about-center">
      <article class="about-info">
        <h3>explore the difference</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <a href="#" class="btn">read more</a>
      </article>
    </div>
  </section>
  )
}

export default Aboutus