import React from 'react';

function DisplaySimpson ({simpson}){
  return (
    simpson &&(
      <div className="DisplaySimpson">
          <img src={simpson.image} alt={simpson.character} />
          <figcaption>
          <blockquote>{simpson.quote}</blockquote>
          <cite>{simpson.character}</cite>
          </figcaption>
      </div>
    )
  )
}


export default DisplaySimpson;