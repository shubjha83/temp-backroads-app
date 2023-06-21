import React from 'react'
const Title = ({ title,subTitle }) => {
    console.log(subTitle);
    return (
        <div className='section-title'>
          <h2>
            {title} <span>{subTitle}</span>
          </h2>
        </div>
      );
}
export default Title