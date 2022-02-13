import React from 'react';
import './body.css';
import 'bootstrap/dist/css/bootstrap.css';
import dk from './dk1.png'
import play from './play.png'
import info from './information.png'

function Body() {
  return (
    <main>
      <h3 className="title t1">DARK</h3>
      <p className="desc">When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships.</p>
      <div className="btns">
        <button type="button" className="btn btn-light pos" onClick={() =>{window.location="https://www.netflix.com/title/80100172"}}><img src={play} id="play"/>Play</button>
        <button type="button" className="btn btn-secondary pos1"><img src={info} id="info"/>More info</button>
      </div>
    </main>
  );
}

export default Body;